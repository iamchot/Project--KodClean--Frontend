import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faUserCircle, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, FontAwesomeModule],
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class HeaderComponent {
  // สถานะสำหรับ Dropdown
  isCategoriesDropdownOpen = false;

  constructor(
    library: FaIconLibrary,
    public auth: AuthService,
    private router: Router
  ) {
    library.addIcons(faUserCircle, faChevronDown);
  }

  // เมนูหลัก (เอา Categories ออกไปแล้ว)
  navLinksBeforeCategories = [
    { label: 'Home', route: '/' },
    { label: 'Recipes', route: '/recipes' },
    { label: 'Favorites', route: '/favorites' }
  ];

  navLinksAfterCategories = [
    { label: 'Contact', route: '/contact' },
    { label: 'About', route: '/about' }
  ];

  // Categories Dropdown
  categoriesMenu = [
    { label: 'Meat Salads', route: '/categories/meat-salads' },
    { label: 'Seafood', route: '/categories/seafood' },
    { label: 'Vegetarian', route: '/categories/vegetarian' }
  ];

  toggleCategoriesDropdown(): void {
    this.isCategoriesDropdownOpen = !this.isCategoriesDropdownOpen;
  }

  closeCategoriesDropdown(): void {
    this.isCategoriesDropdownOpen = false;
  }

  // ✅ ต้องอยู่ "ภายใน" คลาส
  logout(): void {
    this.auth.logout();
    this.router.navigateByUrl('/login');
  }
}