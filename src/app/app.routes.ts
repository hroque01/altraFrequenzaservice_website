import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home').then(m => m.HomePage)
  },
  {
    path: 'chi-siamo',
    loadComponent: () => import('./pages/chi-siamo/chi-siamo').then(m => m.ChiSiamoPage)
  },
  {
    path: 'settori',
    loadComponent: () => import('./pages/settori/settori').then(m => m.SettoriPage),
    children: [
      { path: '', redirectTo: 'audio', pathMatch: 'full' },
      {
        path: ':slug',
        loadComponent: () => import('./pages/settori/settore-detail').then(m => m.SettoreDetailPage)
      }
    ]
  },
  {
    path: 'gallery',
    loadComponent: () => import('./pages/gallery/gallery').then(m => m.GalleryPage)
  },
  {
    path: 'contatti',
    loadComponent: () => import('./pages/contatti/contatti').then(m => m.ContattiPage)
  },
  { path: '**', redirectTo: '' }
];
