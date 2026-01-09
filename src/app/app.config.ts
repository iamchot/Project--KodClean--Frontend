// (ไฟล์ app.config.ts)

import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection,
  importProvidersFrom,
} from '@angular/core'; // <--- Changed to provideZoneChangeDetection
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

// 2. เพิ่ม Import นี้
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }), // <--- Fixed: use Zone.js
    provideRouter(routes),
    provideClientHydration(withEventReplay()),

    // 3. เพิ่มบรรทัดนี้เข้าไปครับ
    importProvidersFrom(FontAwesomeModule),
  ],
};
