import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-favorite-card', // 👈 ชื่อ selector ของลูก
  standalone: true,
  imports: [CommonModule],
  templateUrl: './favorite-card.html',
  styleUrls: ['./favorite-card.css']
})
export class FavoriteCardComponent {
  // (Input) รอรับข้อมูล 1 ชิ้น จากแม่
  @Input() recipe: any;
  
  // (Output) สร้าง "ลำโพง" ชื่อ 'remove'
  @Output() remove = new EventEmitter<any>();

  // "สวิตช์" ของตัวเอง
  public isExpanded: boolean = false;

  constructor() {}

  // ฟังก์ชันสลับสวิตช์
  toggleDetails(): void {
    this.isExpanded = !this.isExpanded;
  }

  // ฟังก์ชันเมื่อกดปุ่ม 'x' (หรือปุ่ม ❤️ ในโหมดขยาย)
  onRemoveClick(): void {
    // "ตะโกน" (emit) ออกไปทาง "ลำโพง" (remove)
    // พร้อมกับส่งข้อมูล 'recipe' นี้กลับไปให้แม่
    this.remove.emit(this.recipe);
  }
}