import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DesignSystemComponent } from './pages/design-system/design-system.component';
import { ExperimentLabComponent } from './pages/experiment-lab/experiment-lab.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Figma Angular Lab - Home' },
  { path: 'design-system', component: DesignSystemComponent, title: 'Figma Angular Lab - Design Tokens' },
  { path: 'experiment-lab', component: ExperimentLabComponent, title: 'Figma Angular Lab - Experiment Lab' },
  { path: '**', redirectTo: '' }
];
