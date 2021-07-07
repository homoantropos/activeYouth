import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Result} from '../../shared/interfases';
import {Router} from '@angular/router';

@Component({
  selector: 'app-results-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css']
})

export class TeamListComponent implements OnInit {

  @Input() results: Array<Result> = [];
  @Output() resultEmit: EventEmitter<Result> = new EventEmitter<Result>();
  displayedColumns = ['participant', 'region', 'eduentity', 'DoB', 'coach', 'discipline', 'edit'];
  paginatorStartPageNumber = 0;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  goToOneResultEditor(result: Result): void {
    this.resultEmit.emit(result);
    this.router.navigateByUrl(`admin/schedule/application/${result.appointmentId}`);
  }
}
