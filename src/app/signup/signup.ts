import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService, StoredUser } from '../auth/auth.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './signup.html',
  styleUrls: ['./signup.css']
})
export class Signup {
  model: StoredUser = {
    username: '',
    email: '',
    password: '',
    displayName: ''
  };
  loading = false;
  errorMsg = '';

  constructor(private router: Router, public auth: AuthService) {}

  handleSignup(form: NgForm) {
    this.errorMsg = '';
    if (form.invalid) return;

    const { username, email, password, displayName } = this.model;
    if (!username || !password) {
      this.errorMsg = 'กรุณากรอก Username และ Password';
      return;
    }

    this.loading = true;
    this.auth.register({ username, email, password, displayName }).subscribe({
      next: () => {
        // สมัครเสร็จ -> auto login แล้วไปหน้า Home
        this.auth.login(username, password).subscribe({
          next: () => { this.loading = false; this.router.navigateByUrl('/'); },
          error: () => { this.loading = false; this.router.navigateByUrl('/login'); }
        });
      },
      error: (err) => {
        this.loading = false;
        this.errorMsg = err?.message || 'สมัครไม่สำเร็จ';
      }
    });
  }
}