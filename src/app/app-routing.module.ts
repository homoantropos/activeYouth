import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./main-layout/main-layout.module').then(m => m.MainLayoutModule) },
  { path: 'admin', loadChildren: () => import('./admin-layout/admin-layout.module').then(m => m.AdminLayoutModule)
  },
  { path: 'expenses', loadChildren: () => import('./fin-admin-layout/fin-admin-layout.module').then(m => m.FinAdminLayoutModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
