import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  currentLang = localStorage.getItem('lang') || 'de';

  constructor(private translate: TranslateService) {}

  toggleLanguage(): void {
    this.currentLang = this.currentLang === 'de' ? 'en' : 'de';
    localStorage.setItem('lang', this.currentLang);
    this.translate.use(this.currentLang);
  }

  setLanguage(lang: string): void {
    this.currentLang = lang;
    localStorag