import { Component } from '@angular/core';
import { HeroComponent } from '../hero/hero';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-recipes',
  standalone: true,
  imports: [HeroComponent,CommonModule],
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
        '2 cups mixed salad greens',
        '1/2 cup cherry tomatoes',
        '1/2 cup sliced cucumber',
        '1/4 cup red onion',
        '1/4 avocado',
        '1 tbsp roasted sunflower seeds or almonds'
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
      ]
    }
  ];
}