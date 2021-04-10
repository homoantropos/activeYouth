import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SuperAdminLayoutComponent} from './super-admin-layout.component';
import {UserAdminComponent} from './user-admin/user-admin.component';
import {PlacesAdminComponent} from './places-admin/places-admin.component';
import {SportsAdminComponent} from './sports-admin/sports-admin.component';
import {ActivitiesAdminComponent} from './activities-admin/activities-admin.component';
import {UserCreatorComponent} from './creators-editors/user-creator/user-creator.component';
import {AuthGuardService} from '../admin-layout/auth/auth-guard.service';
import {UserEditorComponent} from './creators-editors/user-editor/user-editor.component';

const routes: Routes = [
  {path: '', component: SuperAdminLayoutComponent, canActivate: [AuthGuardService], children: [
      {path: '', redirectTo: 'users', pathMatch: 'full'},
      {path: 'users', children: [
          {path: 'create', component: UserCreatorComponent},
          {path: 'edit/:id', component: UserEditorComponent},
          {path: '', component: UserAdminComponent}]
      },
      {path: 'places', component: PlacesAdminComponent},
      {path: 'sports', component: SportsAdminComponent},
      {path: 'activities', component: ActivitiesAdminComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuperAdminLayoutRoutingModule {
}
