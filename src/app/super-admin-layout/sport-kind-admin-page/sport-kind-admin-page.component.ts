import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {User} from '../../shared/interfases';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {SportKindService} from '../services/sport-kind.service';

@Component({
  selector: 'app-sport-kind-admin',
  templateUrl: './sport-kind-admin-page.component.html',
  styleUrls: ['./sport-kind-admin-page.component.css']
})
export class SportKindAdminPageComponent implements OnInit {
  // @ts-ignore
  dataSource: MatTableDataSource<User>;
  // @ts-ignore
  sports$: Observable<Array<User>>;
  displayedColumns = ['_id', 'code', 'sport_kind', 'delete'];
  paginatorStartPageNumber = 0;

  constructor(
    private router: Router,
    private sportKindService: SportKindService
  ) {
  }

  ngOnInit(): void {
    this.sports$ = this.sportKindService.getAllSportKinds();
  }

  onDelete(id: number): void {
    this.sportKindService.removeSportKind(id).subscribe(
      res => {
        alert(res.message);
        this.ngOnInit();
      }
    );
  }

  goToSportKindCreator(): void {
    this.router.navigate(['/superadmin', 'sports', 'create']);
  }

  goToSportKindEditor(id: number): void {
    this.router.navigateByUrl(`/superadmin/sports/edit/${id}`);
  }
}
