import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Coach} from '../../shared/interfases';
import {CoachService} from '../services/coach.service';

@Component({
  selector: 'app-coaches-list',
  templateUrl: './coaches-list.component.html',
  styleUrls: ['./coaches-list.component.css']
})
export class CoachesListComponent implements OnInit {
  // @ts-ignore
  @Input() coachesList: Array<Coach>;
  // @ts-ignore
  coache$: Observable<Array<Coach>>;
  paginatorStartPageNumber = 0;
  displayedColumns: Array<string> = ['id', 'coachFullName', 'edit', 'delete'];

  constructor(
    private coachService: CoachService
  ) {
  }

  ngOnInit(): void {
    this.coache$ = this.coachService.getAllCoaches();
  }

}
