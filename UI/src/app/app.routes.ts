import { Routes } from '@angular/router';
import { LayoutComponent } from './pages/layouts/layout.component';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    loadChildren: () =>
      import('./pages/pages.module').then((m) => m.PagesModule),
  },
  {
    path: 'pages',
    loadChildren: () =>
      import('./extrapages/extrapages.module').then((m) => m.ExtrapagesModule),
  },
  {
    path: 'auth',
    providers: [provideStore(), provideStoreDevtools()],
    loadChildren: () =>
      import('./account/account.module').then((m) => m.AccountModule),
  },
];
