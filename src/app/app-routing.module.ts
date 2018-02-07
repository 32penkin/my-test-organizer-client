import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/guards/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    loadChildren: './landing/landing.module#LandingModule',
  },
  {
    path: 'auth',
    loadChildren: './auth/auth.module#AuthModule',
  },
  {
    path: 'pages',
    loadChildren: './pages/pages.module#PagesModule',
    canActivate: [ AuthGuard ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
