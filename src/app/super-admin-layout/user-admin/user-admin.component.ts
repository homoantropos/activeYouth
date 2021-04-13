import {Component, OnInit} from '@angular/core';
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
  user$: Observable<Array<User>>;
  displayedColumns = ['_id', 'email', 'role', 'delete'];

  constructor(
    private router: Router,
    private userService: UserService
  ) {
  }

  ngOnInit(): void {
    this.user$ = this.userService.getAllUsers();
  }

  onDelete(id: string): void {
    this.userService.removeUser(id).subscribe(
      res => {
        alert(res.message);
        this.ngOnInit();
      }
    );
  }

  goToUserCreator(): void {
    this.router.navigate(['/superadmin', 'users', 'create']);
  }

  goToUserEditor(id: string): void {
    this.router.navigateByUrl(`/superadmin/users/edit/${id}`);
  }
}
