import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Portfolio } from './features/portfolio/portfolio/portfolio';
import { Imprint } from './features/legal/imprint/imprint';
import { Privacy } from './features/legal/privacy/privacy';

const routes: Routes = [
  { path: '', component: Portfolio },
  { path: 'impressum', component: Imprint },
  { path: 'datenschutz', component: Privacy },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
