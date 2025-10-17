
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // สำหรับใช้ *ngFor
import { RouterModule } from '@angular/router'; // สำหรับใช้ routerLink และ routerLinkActive

@Component({
  selector: 'app-header',
  standalone: true, // กำหนดเป็น Standalone Component
  imports: [CommonModule, RouterModule], // นำเข้าโมดูลที่จำเป็น
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class HeaderComponent {
  // ข้อมูลเมนูสำหรับวนลูปแสดงผล
  navLinks = [
    { label: 'Home', route: '/' },
    { label: 'Recipes', route: '/recipes' },
    { label: 'Favorites', route: '/favorites' },
    { label: 'Categories', route: '/categories' },
    { label: 'Contact', route: '/contact' },
    { label: 'About', route: '/about' },
  ];
}