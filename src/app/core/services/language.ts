import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  currentLang = 'de';

  constructor(private translate: TranslateService) {}

  toggleLanguage(): void {
    this.currentLang = this.currentLang === 'de' ? 'en' : 'de';
    this.translate.use(this.currentLang);
  }

  getCurrentLang(): string {
    return this.currentLang;
  }
}
