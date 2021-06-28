import {Component, Input, OnInit} from '@angular/core';
import {Result} from '../../shared/interfases';
import {Router} from '@angular/router';

@Component({
  selector: 'app-results-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css']
})

export class TeamListComponent implements OnInit {

  @Input() results: Array<Result> = [];
  displayedColumns = ['participant', 'region', 'eduentity', 'discipline', 'edit'];
  paginatorStartPageNumber = 0;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  goToOneResultEditor(id: number): void {
    this.router.navigateByUrl(`admin/rating/editOne/${id}`);
  }
}
