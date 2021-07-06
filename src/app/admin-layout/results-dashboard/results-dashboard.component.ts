import { Component, OnInit } from '@angular/core';
import {Result} from '../../shared/interfases';
import {ResultService} from '../../shared/services/result.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-results-dashboard',
  templateUrl: './results-dashboard.component.html',
  styleUrls: ['./results-dashboard.component.css']
})
export class ResultsDashboardComponent implements OnInit {

  // @ts-ignore
  results: Array<Result>;
  paginatorStartPageNumber = 0;
  displayedColumns: Array<string> = ['participant', 'region', 'eduentity', 'DoB', 'coach', 'discipline', 'delete'];
  constructor(
    private route: ActivatedRoute,
    private resultService: ResultService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.route.paramMap
      .pipe(
        switchMap(
          (params: Params) => {
            return this.resultService.getResultByAppointment(params.get('id'));
          }
        )
      )
      .subscribe(
        res => {
          this.results = res;
        }
      );
  }

  goToOneResultEditor(id: number): void {
    this.router.navigateByUrl(`admin/result/edit/${id}`);
  }

  deleteResultFromDB(id: number): void {
    this.resultService.deleteResult(id).subscribe(
      (message) => {
        alert(message.message);
        this.ngOnInit();
      }
    );
  }

}
