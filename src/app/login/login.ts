// login.component.ts

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // 💡 ต้องใช้ FormsModule สำหรับ Two-way data binding (ngModel)

// 1. Interface
// ⚠️ เปลี่ยนชื่อเป็น LoginData เพื่อไม่ให้ซ้ำกับชื่อ Class 'Login' (ถ้าไม่เปลี่ยนจะเกิด Error TS2395)
export interface LoginData {
    usernameOrEmail: string;
    password: string;
}

@Component({
  selector: 'app-login',
  // 💡 เพิ่ม FormsModule ใน imports เพื่อให้ใช้ ngModel ได้
  imports: [FormsModule], 
  standalone: true, // สมมติว่าเป็น Standalone Component
  templateUrl: './login.html',
  styleUrl: './login.css'
})
// 2. Component Class
export class Login { // ⚠️ เปลี่ยนชื่อ Class เป็น LoginComponent
    
    // 3. กำหนด Model สำหรับ Data Binding (ค่าเริ่มต้นของฟอร์ม)
    loginModel: LoginData = {
        usernameOrEmail: '',
        password: ''
    };

    /**
     * ฟังก์ชันที่ถูกเรียกเมื่อฟอร์มถูก Submit ใน Angular Template
     */
    handleLogin(): void {
        const loginData = this.loginModel;

        // ตรวจสอบความถูกต้องเบื้องต้น
        if (!loginData.usernameOrEmail.trim() || !loginData.password) {
            alert("กรุณากรอก Username/Email และ Password ให้ครบถ้วน");
            return;
        }

        // 💡 Logic ในการส่งข้อมูลไปยัง API/เซิร์ฟเวอร์จริง
        console.log("Attempting to log in with data:", loginData);

        // ตัวอย่าง: ส่งไปยัง API
        // this.authService.login(loginData).subscribe({
        //     next: (res) => { alert("Login Successful!"); this.router.navigate(['/home']); },
        //     error: (err) => { alert("Login failed: " + err.message); }
        // });

        alert("Login Successful! (จำลอง)");
        // ไม่ต้อง reset ฟอร์มด้วยตัวเอง เพราะ Angular จะจัดการ State
    }
}