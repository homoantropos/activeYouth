import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {SportHall, Town, User} from '../../../shared/interfases';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {TownService} from '../../services/town.service';
import {SportHallService} from '../../services/sport-hall.service';

@Component({
  selector: 'app-sport-halls-admin-page',
  templateUrl: './sport-halls-admin-page.component.html',
  styleUrls: ['./sport-halls-admin-page.component.css']
})
export class SportHallsAdminPageComponent implements OnInit {
// @ts-ignore
  dataSource: MatTableDataSource<User>;
  // @ts-ignore
  sportHalls$: Observable<Array<SportHall>>;
  displayedColumns = ['_id', 'name', 'town', 'address', 'delete'];
  paginatorStartPageNumber = 0;
  // @ts-ignore
  hideButton: boolean;

  constructor(
    private router: Router,
    private sportHallService: SportHallService
  ) {
  }

  ngOnInit(): any {
    this.sportHalls$ = this.sportHallService.getAllSportHalls();
    this.hideButton = true;
  }

  onDelete(id: number): void {
    this.sportHallService.removeSportHall(id).subscribe(
      res => {
        alert(res.message);
        this.ngOnInit();
      }
    );
  }

  goToSportHallCreator(): void {
    this.router.navigate(['/superadmin', 'places', 'sportHalls', 'create']);
    this.hideButton = !this.hideButton;
  }

  goToSportHallEditor(id: number): void {
    this.router.navigateByUrl(`/superadmin/places/sportHalls/edit/${id}`);
  }
}

