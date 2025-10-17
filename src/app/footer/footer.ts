import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true, // กำหนดเป็น Standalone Component
  imports: [CommonModule,RouterModule],
  templateUrl: './footer.html',
  styleUrls: ['./footer.css']
})
export class FooterComponent {
  // ข้อมูลลิงก์ในส่วน Important Links
  importantLinks = [
    { label: 'Get help', route: '/help' },
    { label: 'Contact', route: '/contact' },
    { label: 'About', route: '/about' },
  ];

  // ข้อมูลลิงก์ในส่วน Policy (Bottom Footer)
  policyLinks = [
    { label: 'Privacy Policy', route: '/privacy' },
    { label: 'Terms', route: '/terms' },
    { label: 'Pricing', route: '/pricing' },
    { label: 'Do not sell or share my personal information', route: '/dnt' },
  ];

  // (Optional) ฟังก์ชันสำหรับจัดการการสมัครสมาชิก
  subscribe(email: string) {
    console.log(`Subscribing with email: ${email}`);
    // ใส่ Logic การเรียก API สมัครสมาชิกที่นี่
  }
}