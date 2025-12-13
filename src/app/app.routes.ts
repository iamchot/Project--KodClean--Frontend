import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

// 💡 ต้อง Import Component ที่คุณใช้ในแต่ละ Route
import { Homepage } from './homepage/homepage';
import { RecipesComponent } from './recipes/recipes';
import { CategoriesComponent } from './categories/categories';
import { Contact } from './contact/contact';
import { AboutComponent } from './about/about';
import { Login } from './login/login';
import { Signup } from './signup/signup';
import { FavoriteComponent } from './favorite/favorite';

export const routes: Routes = [
  // Home: Route หลัก
  { path: '', component: Homepage, title: 'KodClean | Home' },

  // Recipes
  { path: 'recipes', component: RecipesComponent, title: 'KodClean | Recipes' },

  // Favorites
  { path: 'favorites', component: FavoriteComponent, title: 'KodClean | Favorites' },

  // Categories - เพิ่ม dynamic route parameter
  { path: 'categories', component: CategoriesComponent, title: 'KodClean | Categories' },
  { path: 'categories/:category', component: CategoriesComponent, title: 'KodClean | Categories' },

  // Contact
  { path: 'contact', component: Contact, title: 'KodClean | Contact Us' },

  // About
  { path: 'about', component: AboutComponent, title: 'KodClean | About' },

  { path: 'login', component: Login, title: 'KodClean | Login/Signup' },

  { path: 'signup', component: Signup, title: 'KodClean | Signup' },

  // Wildcard Route: สำหรับจัดการ URL ที่ไม่มีอยู่จริง (Page Not Found)
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }