import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category-card.html',
  styleUrls: ['./category-card.css']
})
export class CategoryCardComponent {
  // (Input) รอรับข้อมูล 1 ชิ้น จากแม่
  @Input() recipe: any;

  // "สวิตช์" ของตัวเอง (เริ่มต้นคือ false)
  public isExpanded: boolean = false;

  // ฟังก์ชันสลับสวิตช์
  toggleDetails(): void {
    this.isExpanded = !this.isExpanded;
  }
}