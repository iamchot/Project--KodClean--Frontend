import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  // 1. สร้าง "กล่อง" เก็บข้อมูล (เริ่มต้นเป็น array ว่าง)
  private favoritesSubject = new BehaviorSubject<any[]>([]);
  
  // 2. สร้าง "ท่อ" ให้ Component อื่นมา "ฟัง" ข้อมูลในกล่อง
  public favorites$ = this.favoritesSubject.asObservable();

  constructor() { }

  // 3. ฟังก์ชันสำหรับ "เพิ่ม" รายการโปรด
  addFavorite(recipe: any): void {
    const currentFavorites = this.favoritesSubject.value;
    
    // 3.1 ตรวจสอบว่ามีเมนูนี้อยู่แล้วหรือยัง (เช็คจาก title)
    const existing = currentFavorites.find(item => item.title === recipe.title);
    
    // 3.2 ถ้ายังไม่มี ให้เพิ่มเข้าไป
    if (!existing) {
      const newFavorites = [...currentFavorites, recipe];
      // "ส่ง" ข้อมูลใหม่ (ที่มีเมนูนี้แล้ว) ออกไปทาง "ท่อ"
      this.favoritesSubject.next(newFavorites); 
      alert(`Added ${recipe.title} to favorites!`); // แจ้งเตือน (ทางเลือก)
    } else {
      alert(`${recipe.title} is already in favorites.`); // แจ้งเตือน (ทางเลือก)
    }
  }

  // 4. ฟังก์ชันสำหรับ "ลบ" รายการโปรด
  removeFavorite(recipeToRemove: any): void {
    const currentFavorites = this.favoritesSubject.value;
    // 4.1 กรองเอาเฉพาะเมนูที่ไม่ตรงกับ title ที่ส่งมา
    const newFavorites = currentFavorites.filter(item => item.title !== recipeToRemove.title);
    // "ส่ง" ข้อมูลใหม่ (ที่ไม่มีเมนูนี้แล้ว) ออกไปทาง "ท่อ"
    this.favoritesSubject.next(newFavorites); 
  }
}