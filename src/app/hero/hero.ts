// hero.ts

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// --- 1. เพิ่ม Import นี้เข้ามาครับ ---
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-hero',
  standalone: true,
  // --- 2. เพิ่ม FontAwesomeModule ใน imports array นี้ครับ ---
  imports: [
    CommonModule, 
    FormsModule, 
    RouterModule, 
    FontAwesomeModule // <--- เพิ่มตรงนี้
  ],
  templateUrl: './hero.html',
  styleUrls: ['./hero.css']
})
export class HeroComponent {
  // ฟังก์ชันสำหรับจัดการการค้นหา
  searchQuery: string = '';

  onSearch() {
    if (this.searchQuery.trim()) {
      console.log('Searching for:', this.searchQuery);
      // ใส่ Logic การนำทางไปยังหน้า Search Results ที่นี่
    }
  }
}