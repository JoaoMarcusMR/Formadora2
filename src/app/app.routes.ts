import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'presentation',
    pathMatch: 'full',
  },
  {
    path: 'presentation',
    loadComponent: () =>
      import('./pages/presentation/presentation.page').then(m => m.PresentationPage),
  },
  {
    path: 'page-a',
    loadComponent: () =>
      import('./pages/page-1/page-1.page').then(m => m.PageAPage),
  },
  {
    path: 'page-b',
    loadComponent: () =>
      import('./pages/page-2/page-2.page').then(m => m.PageBPage),
  },
  {
    path: 'page-b',
    loadComponent: () => import('./pages/page-2/page-2.page').then( m => m.PageBPage)
  },
  {
    path: 'page-b',
    loadComponent: () => import('./pages/page-2/page-2.page').then( m => m.PageBPage)
  }
];
