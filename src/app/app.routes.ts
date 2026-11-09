import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DesignSystemComponent } from './pages/design-system/design-system.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Figma Angular Lab - Home' },
  { path: 'design-system', component: DesignSystemComponent, title: 'Figma Angular Lab - Design Tokens' },
  { path: '**', redirectTo: '' }
];
