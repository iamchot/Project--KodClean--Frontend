import { Component } from '@angular/core';
import { HeroComponent } from '../hero/hero';
import { CommonModule } from '@angular/common';
// 1. Import Component ลูก (CardComponent)
import { CardComponent } from '../card/card'; // (แก้ path ให้ถูกต้อง)

@Component({
  selector: 'app-recipes',
  standalone: true,
  // 2. เพิ่ม CardComponent ใน imports
  imports: [HeroComponent, CommonModule, CardComponent], 
  templateUrl: './recipes.html',
  styleUrls: ['./recipes.css']
})
export class RecipesComponent {
  recipes = [
    {
      title: 'Chicken Salad',
      rating: 4.5,
      imageSrc: 'https://i.pinimg.com/1200x/0c/88/dc/0c88dca4cae64af3728c5bed1969a5cb.jpg',
      ingredients: [
        '1 grilled chicken breast (sliced)',
        '2 cups mixed salad greens (lettuce, arugula, spinach, etc.)', // <-- ปรับปรุงข้อมูล
        '1/2 cup cherry tomatoes (halved)', // <-- ปรับปรุงข้อมูล
        '1/2 cup sliced cucumber',
        '1/4 cup red onion (thinly sliced)', // <-- ปรับปรุงข้อมูล
        '1/4 avocado (sliced, optional)', // <-- ปรับปรุงข้อมูล
        '1 tbsp roasted sunflower seeds or almonds (optional)'
      ],
      // 3. เพิ่ม "วิธีทำ" (steps)
      steps: [
        { title: '1. Prepare the ingredients:', details: [
            'Wash and dry the salad greens (such as lettuce, arugula, spinach, etc.).',
            'Slice the cherry tomatoes in half, the cucumber into thin rounds, and the red onion into thin slices.',
            'Slice the avocado (if using).'
        ]},
        { title: '2. Grill the chicken:', details: [
            'Season the chicken breast with salt, pepper, and a bit of olive oil.',
            'Grill over medium heat until cooked through on both sides (about 4-5 minutes per side).',
            'Let it rest for a few minutes, then slice it thinly.'
        ]},
        { title: '3. Assemble the salad:', details: [
            'Place the mixed greens in a large bowl or plate.',
            'Add cherry tomatoes, cucumber, red onion, avocado, and the grilled chicken slices.',
            'Sprinkle roasted sunflower seeds or almonds on top (optional).'
        ]},
        { title: '4. Serve:', details: [
            'Serve with your favorite dressing.',
            'Toss gently before eating.'
        ]}
      ]
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
      // 3. เพิ่ม "วิธีทำ" (steps)
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
      ]
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
      ]
    }
  ];
}

