import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {MatTableDataSource} from '@angular/material/table';
import {User} from '../../shared/interfases';
import {Observable} from 'rxjs';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-user-admin',
  templateUrl: './user-admin.component.html',
  styleUrls: ['./user-admin.component.css']
})
export class UserAdminComponent implements OnInit {
  // @ts-ignore
  dataSource: MatTableDataSource<User>;
  // @ts-ignore
  user$: Observable<Arraye<User>>;
  displayedColumns = ['email', 'password'];
  constructor(
    private router: Router,
    private userServise: UserService
  ) { }

  ngOnInit(): void {
    this.user$ = this.userServise.getAllUsers();
  }

  goToUserCreator(): void {
    this.router.navigate(['/superadmin', 'users', 'create']);
  }
}
