import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SuperAdminLayoutComponent} from './super-admin-layout.component';
import {UserAdminComponent} from './user-admin/user-admin.component';
import {PlacesAdminComponent} from './places-admin/places-admin.component';
import {SportsAdminComponent} from './sports-admin/sports-admin.component';
import {ActivitiesAdminComponent} from './activities-admin/activities-admin.component';
import {SuperLoginPageComponent} from './super-login-page/super-login-page.component';
import {UserCreatorComponent} from './creators-editors/user-creator/user-creator.component';
import {AuthGuardSuperService} from './authSuper/auth-guard-super.service';

const routes: Routes = [
  {path: '', component: SuperAdminLayoutComponent, children: [
      {path: '', redirectTo: 'login', pathMatch: 'full'},
      {path: 'login', component: SuperLoginPageComponent},
      {path: 'users', canActivate: [AuthGuardSuperService], children: [
          {path: 'create', component: UserCreatorComponent},
          {path: '', component: UserAdminComponent}]
      },
      {path: 'places', component: PlacesAdminComponent, canActivate: [AuthGuardSuperService]},
      {path: 'sports', component: SportsAdminComponent, canActivate: [AuthGuardSuperService]},
      {path: 'activities', component: ActivitiesAdminComponent, canActivate: [AuthGuardSuperService]}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuperAdminLayoutRoutingModule {
}
