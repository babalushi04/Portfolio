import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader, provideTranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Header } from './core/components/header/header';
import { Footer } from './core/components/footer/footer';
import { Loader } from './core/components/loader/loader';
import { Portfolio } from './features/portfolio/portfolio/portfolio';
import { Hero } from './features/portfolio/hero/hero';
import { AboutMe } from './features/portfolio/about-me/about-me';
import { Skills } from './features/portfolio/skills/skills';
import { Projects } from './features/portfolio/projects/projects';
import { Contact } from './features/portfolio/contact/contact';
import { Imprint } from './features/legal/imprint/imprint';
import { Privacy } from './features/legal/privacy/privacy';
import { Testimonials } from './features/portfolio/testimonials/testimonials';

@NgModule({
  declarations: [
    App,
    Header,
    Footer,
    Loader,
    Portfolio,
    Hero,
    AboutMe,
    Skills,
    Projects,
    Contact,
    Imprint,
    Privacy,
    Testimonials,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useClass: TranslateHttpLoader,
      },
      defaultLanguage: 'de',
    }),
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(),
    ...provideTranslateHttpLoader({ prefix: './assets/i18n/', suffix: '.json' }),
  ],
  bootstrap: [App],
})
export class AppModule {}
