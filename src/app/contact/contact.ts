// contact.component.ts

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // ต้องนำเข้า CommonModule เพื่อใช้ ngFor

// 1. ย้าย Interface ไปที่นี่ หรือควรอยู่ในไฟล์ types.ts แยกต่างหาก
// ⚠️ แก้ชื่อเป็น 'ContactInfo' เพื่อไม่ให้ซ้ำกับชื่อ Component Class
export interface ContactInfo {
    title: string;          
    role: 'Head Office' | 'CEO'; 
    description: string;
    phone: string;
    email: string;
    website: string;
    location: string;
}

@Component({
  selector: 'app-contact',
  // ต้องเพิ่ม CommonModule เพื่อให้ใช้ *ngFor ใน template ได้
  imports: [CommonModule], 
  standalone: true, // สมมติว่าเป็น Standalone Component
  templateUrl: './contact.html', // เปลี่ยนชื่อไฟล์ให้ตรงตาม Angular Naming Convention
  styleUrl: './contact.css'
})
// 2. Class Contact (Component)
export class Contact{ // ⚠️ เปลี่ยนชื่อ Class เป็น ContactComponent เพื่อไม่ให้ซ้ำกับ Interface
    
    // 3. นำ Mock Data มาเป็น Property ของ Class
    contactData: ContactInfo[] = [
        {
            title: 'Address',
            role: 'Head Office',
            description: 'If you have a bad experience or you found something wrong you can tell us by',
            phone: '099-999-9999',
            email: 'KodClean@gmail.com',
            website: 'www.KodClean.com',
            location: 'RMUTT',
        },
        {
            title: 'Address',
            role: 'CEO',
            description: 'If you have a bad experience or you found something wrong you can tell him directly by',
            phone: '088-888-8888',
            email: 'OHM@gmail.com',
            website: 'www.KodClean.com',
            location: 'RMUTT',
        },
    ];
}