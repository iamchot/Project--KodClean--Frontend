import { RouterModule,Routes } from '@angular/router';
import { NgModule } from '@angular/core';

// 💡 ต้อง Import Component ที่คุณใช้ในแต่ละ Route
import { Homepage } from './homepage/homepage';
import { RecipesComponent } from './recipes/recipes';
import { Favorites } from './favorites/favorites';
import { Categories } from './categories/categories';
import { Contact } from './contact/contact';
import { About } from './about/about';
import { Login } from './login/login';
import { Signup } from './signup/signup';

export const routes: Routes = [
  // Home: Route หลัก
  { path: '', component: Homepage, title: 'KodClean | Home' },

  // Recipes
  { path: 'recipes', component:RecipesComponent, title: 'KodClean | Recipes' },

  // Favorites
  { path: 'favorites', component: Favorites, title: 'KodClean | Favorites' },

  // Categories
  { path: 'categories', component: Categories, title: 'KodClean | Categories' },

  // Contact
  { path: 'contact', component: Contact, title: 'KodClean | Contact Us' },

  // About
  { path: 'about', component: About, title: 'KodClean | About' },

  { path: 'login', component: Login, title: 'KodClean | Login/Signup' },

  { path: 'signup', component: Signup, title: 'KodClean | Signup' },

  // Wildcard Route: สำหรับจัดการ URL ที่ไม่มีอยู่จริง (Page Not Found)
  { path: '**', redirectTo: '' }
];

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule {}
