import { Component } from '@angular/core';
import { HeroComponent } from '../hero/hero';
import { Recipe } from '../recipe/recipe';

@Component({
  selector: 'app-homepage',
  imports: [HeroComponent,Recipe],
  templateUrl: './homepage.html',
  styleUrl: './homepage.css'
})
export class Homepage {

}
