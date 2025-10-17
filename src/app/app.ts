import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterOutlet } from "@angular/router";
/******************************************** */
import { HeaderComponent } from "./header/header";
import { FooterComponent } from "./footer/footer";
import { HeroComponent } from "./hero/hero";
import { Recipe } from "./recipe/recipe";
import { Homepage } from "./homepage/homepage";
import { RecipesComponent } from "./recipes/recipes";
import { Contact } from './contact/contact';
import { Login } from "./login/login";
import { Signup } from "./signup/signup";



@Component({
  selector: 'app-root',
  standalone:true,
  imports: [FormsModule,RouterOutlet ,HeaderComponent, FooterComponent,
     HeroComponent, Recipe, HeroComponent, Homepage,RecipesComponent,Contact,Login,Signup],
  templateUrl: './app.html',
  styleUrl:'app.css'
})
///***If-else ****///
export class App{
  isLogin = true

  toggle(){
     this.isLogin = !this.isLogin
  }
}

