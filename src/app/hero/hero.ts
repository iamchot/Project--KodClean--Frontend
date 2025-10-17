import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterModule],
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