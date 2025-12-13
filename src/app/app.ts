import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterOutlet } from "@angular/router";
import { HeaderComponent } from "./header/header";
import { FooterComponent } from "./footer/footer";
import { HeroComponent } from "./hero/hero";
import { Recipe } from "./recipe/recipe";
import { Homepage } from "./homepage/homepage";
import { RecipesComponent } from "./recipes/recipes";
import { Contact } from './contact/contact';
import { Login } from "./login/login";
import { Signup } from "./signup/signup";
import { CardComponent } from "./card/card";
import { FavoriteComponent } from "./favorite/favorite";
import { FavoriteService } from "./favorite-service/favorite-service";
import { FavoriteCardComponent } from "./favorite-card/favorite-card";
import { CategoryCardComponent } from "./category-card/category-card";
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faSearch, faHeart, faUser, faBars } from '@fortawesome/free-solid-svg-icons'; 


@Component({
 selector: 'app-root',
 standalone:true,
imports: [FormsModule,RouterOutlet ,HeaderComponent, FooterComponent,
HeroComponent, Recipe, HeroComponent, Homepage,RecipesComponent,Contact,Login
,Signup,CardComponent, FavoriteComponent ],
 templateUrl: './app.html',
 styleUrl:'app.css'
})

export class App{
 isLogin = true

toggle(){
this.isLogin = !this.isLogin
 }

 constructor(library: FaIconLibrary) {
 
    library.addIcons(
      faSearch,
      faHeart,
      faUser,
      faBars
    );
  }
}