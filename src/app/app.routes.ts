import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/maintenance/maintenance').then(m => m.MaintenancePage)
  },
  { path: '**', redirectTo: '' }
];
