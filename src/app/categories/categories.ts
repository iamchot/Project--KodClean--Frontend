import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { CategoryCardComponent } from '../category-card/category-card';

type Recipe = {
  title: string;
  rating: number;
  imageSrc: string;
  ingredients: string[];
  steps: { title: string; details: string[] }[];
  categories: string[]; // ใช้เก็บ slug ของหมวด เพื่อรองรับสูตรที่อยู่หลายหมวดได้
};

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule, CategoryCardComponent],
  templateUrl: './categories.html',
  styleUrls: ['./categories.css']
})
export class CategoriesComponent implements OnInit {

  public currentCategory = '';
  public categoryRecipes: Recipe[] = [];

  // map slug -> display name
  private readonly categoryNames: Record<string, string> = {
    'all': 'All Categories',
    'meat-salads': 'Meat Salads',
    'seafood': 'Seafood',
    'vegetarian': 'Vegetarian'
  };

  // แหล่งข้อมูล "recipes เดียว" แล้วค่อยฟิลเตอร์ตามหมวด
  // ถ้าโปรเจ็กต์มีไฟล์รวมสูตรอยู่แล้ว ให้เปลี่ยนเป็น import recipes จากไฟล์นั้น
  private readonly recipes: Recipe[] = [
    {
      title: 'Chicken Salad',
      rating: 4.5,
      imageSrc: 'https://i.pinimg.com/1200x/0c/88/dc/0c88dca4cae64af3728c5bed1969a5cb.jpg',
      ingredients: [
        '1 grilled chicken breast (sliced)',
        '2 cups mixed salad greens (lettuce, arugula, spinach, etc.)',
        '1/2 cup cherry tomatoes (halved)',
        '1/2 cup sliced cucumber',
        '1/4 cup red onion (thinly sliced)',
        '1/4 avocado (sliced, optional)',
        '1 tbsp roasted sunflower seeds or almonds (optional)'
      ],
      steps: [
        {
          title: '1. Prepare the ingredients:',
          details: [
            'Wash and dry the salad greens (such as lettuce, arugula, spinach, etc.).',
            'Slice the cherry tomatoes in half, the cucumber into thin rounds, and the red onion into thin slices.',
            'Slice the avocado (if using).'
          ]
        },
        {
          title: '2. Grill the chicken:',
          details: [
            'Season the chicken breast with salt, pepper, and a bit of olive oil.',
            'Grill over medium heat until cooked through on both sides (about 4-5 minutes per side).',
            'Let it rest for a few minutes, then slice it thinly.'
          ]
        },
        {
          title: '3. Assemble the salad:',
          details: [
            'Place the mixed greens in a large bowl or plate.',
            'Add cherry tomatoes, cucumber, red onion, avocado, and the grilled chicken slices.',
            'Sprinkle roasted sunflower seeds or almonds on top (optional).'
          ]
        },
        {
          title: '4. Serve:',
          details: [
            'Serve with your favorite dressing.',
            'Toss gently before eating.'
          ]
        }
      ],
      categories: ['meat-salads']
    },
    {
      title: 'Beef Salad',
      rating: 4.5,
      imageSrc: 'https://i.pinimg.com/736x/f7/63/92/f763925524b55f0a06b8155048673017.jpg',
      ingredients: [
        '150g lean beef steak',
        '2 cups mixed salad greens',
        '1/2 cup cherry tomatoes',
        '1/2 cup sliced red bell pepper',
        '1/4 cup sliced red onion',
        '1 tbsp fresh mint leaves'
      ],
      steps: [
        {
          title: '1. Prepare the ingredients:',
          details: [
            'Wash and dry the salad greens (such as spinach, rocket, or lettuce).',
            'Cut cherry tomatoes in half, slice the cucumber thinly, and slice the red onion finely.',
            'Wash and roughly chop fresh coriander or mint leaves (if using).'
          ]
        },
        {
          title: '2. Cook the beef:',
          details: [
            'Season the beef steak with salt and pepper (and a drizzle of olive oil if desired).',
            'Heat a pan or grill over medium-high heat. Cook the beef for about 2–3 minutes per side for medium doneness, or adjust to your preference.',
            'Let the beef rest for a few minutes after cooking, then slice it thinly against the grain.'
          ]
        },
        {
          title: '3. Assemble the salad:',
          details: [
            'Place the mixed greens in a large salad bowl or plate.',
            'Add the cherry tomatoes, cucumber, and red onion.',
            'Top with the sliced beef and fresh herbs.'
          ]
        },
        {
          title: '4. Serve:',
          details: [
            'Serve with your favorite dressing — for example, lime-chili dressing, balsamic vinaigrette, or Asian-style soy dressing.',
            'Toss gently to combine all ingredients before serving.'
          ]
        }
      ],
      categories: ['meat-salads']
    },
    {
      title: 'Larb Tuna',
      rating: 4.5,
      imageSrc: 'https://i.pinimg.com/1200x/15/0a/bf/150abf1ad81421bd1de81f63cb6b3173.jpg',
      ingredients: [
        '1 can (120g) tuna in water',
        '1-2 tbsp fresh lime juice',
        '1 tbsp fish sauce',
        '1 tsp red pepper powder',
        '1 tbsp sliced shallots',
        '1 tbsp chopped fresh mint',
        'A handful of lettuce or mixed greens',
        'A handful of chopped coriander'
      ],
      steps: [
        {
          title: '1. Prepare the ingredients:',
          details: [
            'Drain the tuna well and flake it into a medium bowl.',
            'Finely slice the shallots.',
            'Roughly chop the fresh mint and coriander (cilantro).'
          ]
        },
        {
          title: '2. Make the dressing:',
          details: [
            'In a small bowl, whisk together the fresh lime juice, fish sauce, and red pepper powder.'
          ]
        },
        {
          title: '3. Combine the Larb:',
          details: [
            'Pour the dressing over the drained tuna.',
            'Add the sliced shallots, chopped mint, and chopped coriander to the bowl.',
            'Toss gently until all ingredients are well combined.'
          ]
        },
        {
          title: '4. Serve:',
          details: [
            'Serve immediately on top of the lettuce or mixed greens.'
          ]
        }
      ],
      categories: ['seafood']
    }
    // หมวด 'vegetarian' ตอนนี้ยังไม่มีสูตร ให้เพิ่มได้ภายหลัง
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // รองรับทั้งกรณี /categories และ /categories/:category
    this.route.paramMap.subscribe(params => {
      const categorySlug = params.get('category');

      if (!categorySlug || categorySlug.toLowerCase() === 'all') {
        this.currentCategory = this.categoryNames['all'];
        this.categoryRecipes = this.getAllRecipes();
        return;
      }

      this.loadCategory(categorySlug);
    });
  }

  private getAllRecipes(): Recipe[] {
    // รวมทุกสูตรจากแหล่งเดียวกัน
    return this.recipes.slice();
  }

  private loadCategory(categorySlug: string): void {
    const slug = categorySlug.toLowerCase();

    this.currentCategory = this.categoryNames[slug] || categorySlug;
    this.categoryRecipes = this.recipes.filter(r => r.categories.includes(slug));
  }
}
