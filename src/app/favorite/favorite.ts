import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { FavoriteService } from '../favorite-service/favorite-service';

// 1. ⭐️ Import Component "ลูก" ที่เราเพิ่งสร้าง
import { FavoriteCardComponent } from '../favorite-card/favorite-card'; // (แก้ path ให้ถูก)

@Component({
  selector: 'app-favorite',
  standalone: true,
  // 2. ⭐️ เพิ่ม FavoriteCardComponent เข้าไปใน imports
  imports: [CommonModule, FavoriteCardComponent], 
  templateUrl: './favorite.html',
  styleUrls: ['./favorite.css']
})
export class FavoriteComponent implements OnInit {

  public favoriteRecipes$!: Observable<any[]>;

  constructor(private favoriteService: FavoriteService) {}

  ngOnInit(): void {
    this.favoriteRecipes$ = this.favoriteService.favorites$;
  }

  // 3. ⭐️ ฟังก์ชันนี้ (removeFavorite) จะถูกเรียกโดย "ลูก"
  //    เมื่อ "ลูก" ตะโกน (emit) ออกมา
  removeFavorite(recipeToRemove: any): void {
    this.favoriteService.removeFavorite(recipeToRemove);
  }
}