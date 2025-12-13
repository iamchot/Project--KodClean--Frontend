import { Injectable } from '@angular/core';
import { Observable, of, throwError, delay, tap } from 'rxjs';

export interface StoredUser {
  username: string;       // ใช้ล็อกอินด้วยชื่อได้
  email?: string;         // หรืออีเมลก็ได้
  password: string;       // เดโม: เก็บแบบ plain (โปรดักชันควร hash)
  displayName?: string;   // ชื่อที่อยากโชว์บน navbar
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly TOKEN_KEY = 'auth_token';
  private readonly USERS_KEY = 'auth_users';
  private readonly CURR_NAME_KEY = 'auth_current_name';

  /** สมัครสมาชิก: บันทึก user ใหม่ (กันซ้ำด้วย username/email) */
  register(user: StoredUser): Observable<StoredUser> {
    const users = this.getAllUsers();
    const dupName = users.some(u => u.username === user.username);
    const dupEmail = !!user.email && users.some(u => u.email === user.email);

    if (dupName || dupEmail) {
      return throwError(() => new Error('Username or email already exists'));
    }

    users.push(user);
    localStorage.setItem(this.USERS_KEY, JSON.stringify(users));
    return of(user).pipe(delay(300));
  }

  /** ล็อกอินด้วย username หรือ email + password (มีเดโม admin/123456 ด้วย) */
  login(usernameOrEmail: string, password: string): Observable<string> {
    const users = this.getAllUsers();
    const found = users.find(u =>
      (u.username === usernameOrEmail || u.email === usernameOrEmail) &&
      u.password === password
    );

    // เดโมเก่า ยังคงให้ผ่านได้
    const okDemo = (usernameOrEmail === 'admin' && password === '123456');

    if (!found && !okDemo) {
      return throwError(() => new Error('Invalid credentials'));
    }

    const token = 'mock.jwt.token';
    return of(token).pipe(
      delay(300),
      tap(tok => {
        this.setToken(tok);
        const name = found?.displayName || found?.username || 'Admin';
        this.setCurrentUserName(name);
      })
    );
  }

  logout(): void {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.CURR_NAME_KEY);
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  setToken(token: string): void {
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  /** สำหรับแสดงชื่อบน Navbar */
  getCurrentUserName(): string | null {
    return localStorage.getItem(this.CURR_NAME_KEY);
  }
  setCurrentUserName(name: string) {
    localStorage.setItem(this.CURR_NAME_KEY, name);
  }

  private getAllUsers(): StoredUser[] {
    try {
      return JSON.parse(localStorage.getItem(this.USERS_KEY) || '[]');
    } catch {
      return [];
    }
  }
}