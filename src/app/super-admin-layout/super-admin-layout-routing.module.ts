import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SuperAdminLayoutComponent} from './super-admin-layout.component';
import {UserAdminComponent} from './user-admin/user-admin.component';
import {PlacesAdminComponent} from './places-admin/places-admin.component';
import {CoachesesAdminComponent} from './coaches-admin/coacheses-admin.component';
import {UserCreatorComponent} from './creators-editors/user-creator/user-creator.component';
import {AuthGuardService} from '../admin-layout/auth/auth-guard.service';
import {UserEditorComponent} from './creators-editors/user-editor/user-editor.component';
import {SportsEditorComponent} from '../admin-layout/creators-editors/sports-editor/sports-editor.component';
import {SportKindAdminComponent} from './sport-kind-admin/sport-kind-admin.component';
import {SportKindCreatorComponent} from './creators-editors/sport-kind-creator/sport-kind-creator.component';
import {SportKindEditorComponent} from './creators-editors/sport-kind-editor/sport-kind-editor.component';

const routes: Routes = [
  {path: '', component: SuperAdminLayoutComponent, canActivate: [AuthGuardService], children: [
      {path: '', redirectTo: 'users', pathMatch: 'full'},
      {path: 'users', children: [
          {path: 'create', component: UserCreatorComponent},
          {path: 'edit/:id', component: UserEditorComponent},
          {path: '', component: UserAdminComponent}]
      },
      {path: 'places', component: PlacesAdminComponent},
      {path: 'sports', children: [
          {path: 'create', component: SportKindCreatorComponent},
          {path: 'edit/:id', component: SportKindEditorComponent},
          {path: '', component: SportKindAdminComponent}
        ]},
      {path: 'coaches', component: CoachesesAdminComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuperAdminLayoutRoutingModule {
}
