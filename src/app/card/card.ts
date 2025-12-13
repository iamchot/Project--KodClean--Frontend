import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
// 1. Import Service 

import { FavoriteService } from '../favorite-service/favorite-service';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.html',
  styleUrls: ['./card.css']
})
export class CardComponent {
  @Input() recipe: any;
  public isExpanded: boolean = false;

  // 2. "ฉีด" (Inject) Service เข้ามาใน constructor
  constructor(private favoriteService: FavoriteService) {}

  toggleDetails(): void {
    this.isExpanded = !this.isExpanded;
  }

  // 3. สร้างฟังก์ชันใหม่สำหรับปุ่ม "Add to Favorites"
  onAddToFavorites(): void {
    // 3.1 เรียกใช้ฟังก์ชัน addFavorite จาก Service
    this.favoriteService.addFavorite(this.recipe); 
  }
}