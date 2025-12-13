// (ไฟล์ app.config.ts)

import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection, importProvidersFrom } from '@angular/core'; // <--- 1. เพิ่ม importProvidersFrom
import { provideRouter } from '@angular/router';


import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

// 2. เพิ่ม Import นี้
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes), 
    provideClientHydration(withEventReplay()),
    
    // 3. เพิ่มบรรทัดนี้เข้าไปครับ
    importProvidersFrom(FontAwesomeModule)
  ]
};