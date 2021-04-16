import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {Town, User} from '../../../shared/interfases';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {TownService} from '../../services/town.service';

@Component({
  selector: 'app-towns-admin-page',
  templateUrl: './towns-admin-page.component.html',
  styleUrls: ['./towns-admin-page.component.css']
})

export class TownsAdminPageComponent implements OnInit {
// @ts-ignore
  dataSource: MatTableDataSource<User>;
  // @ts-ignore
  town$: Observable<Array<Town>>;
  displayedColumns = ['_id', 'name', 'country', 'region', 'delete'];
  paginatorStartPageNumber = 0;
  // @ts-ignore
  hideButton: boolean;

  constructor(
    private router: Router,
    private townService: TownService
  ) {
  }

  ngOnInit(): any {
    this.town$ = this.townService.getAllTowns();
    this.hideButton = true;
  }

  onDelete(id: number): void {
    this.townService.removeTown(id).subscribe(
      res => {
        alert(res.message);
        this.ngOnInit();
      }
    );
  }

  goToRegionCreator(): void {
    this.router.navigate(['/superadmin', 'places', 'towns', 'create']);
    this.hideButton = !this.hideButton;
  }

  goToRegionEditor(id: number): void {
    this.router.navigateByUrl(`/superadmin/places/towns/edit/${id}`);
  }
}

