import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { RouterModule } from '@angular/router';

export interface LoginData {
  usernameOrEmail: string;
  password: string;
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,RouterModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login {
  loginModel: LoginData = { usernameOrEmail: '', password: '' };
  loading = false;
  loginFailed = false;

  constructor(private router: Router, private auth: AuthService) {}

  handleLogin(form?: NgForm): void {
    this.loginFailed = false;

    if (form && form.invalid) {
      return;
    }

    const { usernameOrEmail, password } = this.loginModel;
    if (!usernameOrEmail.trim() || !password) {
      alert('กรุณากรอก Username/Email และ Password');
      return;
    }

    this.loading = true;
    this.auth.login(usernameOrEmail, password).subscribe({
      next: () => {
        this.loading = false;
        this.router.navigateByUrl('/');   // เด้งไปหน้า Home (path '' ใน routes)
      },
      error: () => {
        this.loading = false;
        this.loginFailed = true;
      }
    });
  }
}