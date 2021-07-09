import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Coach} from '../../shared/interfases';
import {CoachService} from '../services/coach.service';

@Component({
  selector: 'app-activities-admin',
  templateUrl: './coaches-admin-page.component.html',
  styleUrls: ['./coaches-admin-page.component.css']
})

export class CoachesAdminPageComponent implements OnInit {
  // @ts-ignore
  coache$: Observable<Array<Coach>>;
  paginatorStartPageNumber = 0;
  displayedColumns: Array<string> = ['id', 'coachFullName', 'edit', 'delete'];

  constructor(
    private coachService: CoachService
  ) { }

  ngOnInit(): void {
    this.coache$ = this.coachService.getAllCoaches();
  }

}
