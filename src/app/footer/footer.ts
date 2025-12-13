import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// --- 1. เพิ่ม Import 2 บรรทัดนี้ ---
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';

// --- 2. เพิ่ม Import ไอคอน (สังเกตว่าต้องมาจาก /free-brands-svg-icons) ---
import { faFacebookF, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  standalone: true, 
  // --- 3. เพิ่ม FontAwesomeModule ใน imports ---
  imports: [CommonModule, RouterModule, FontAwesomeModule],
  templateUrl: './footer.html',
  styleUrls: ['./footer.css']
})
export class FooterComponent {

  // --- 4. เพิ่ม constructor เพื่อลงทะเบียนไอคอน ---
  constructor(library: FaIconLibrary) {
    library.addIcons(
      faFacebookF,
      faInstagram,
      faTiktok
    );
  }

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

  subscribe(email: string) {
    console.log(`Subscribing with email: ${email}`);
  }
}