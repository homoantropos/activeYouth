import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Subscription} from 'rxjs';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {ReportService} from '../../../shared/services/report.service';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-report-editor',
  templateUrl: './report-editor.component.html',
  styleUrls: ['./report-editor.component.css']
})
export class ReportEditorComponent implements OnInit, OnDestroy {

  reportId = 0;
  // @ts-ignore
  reportEditorForm: FormGroup;
  // @ts-ignore
  rSub: Subscription;
  // @ts-ignore
  report: any;

  constructor(
    private route: ActivatedRoute,
    private reportService: ReportService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap((params: Params) => {
          this.reportId = params.get('id');
          return this.reportService.getStatisticByID(params.get('id'));
        }
      )
    ).subscribe(
      report => {
        this.report = report;
        this.reportEditorForm = new FormGroup({
          countries_plan: new FormControl(report.countries_plan, [Validators.required]),
          regions_plan: new FormControl(report.regions_plan, [Validators.required]),
          educationEntity_plan: new FormControl(report.educationEntity_plan, [Validators.required]),
          sportsmen_plan: new FormControl(report.sportsmen_plan, [Validators.required]),
          coaches_plan: new FormControl(report.coaches_plan, [Validators.required]),
          referees_plan: new FormControl(report.referees_plan, [Validators.required]),
          others_plan: new FormControl(report.others_plan, [Validators.required]),
          countries_fact: new FormControl(report.countries_fact, [Validators.required]),
          regions_fact: new FormControl(report.regions_fact, [Validators.required]),
          educationEntity_fact: new FormControl(report.educationEntity_fact, [Validators.required]),
          sportsmen_fact: new FormControl(report.sportsmen_fact, [Validators.required]),
          coaches_fact: new FormControl(report.coaches_fact, [Validators.required]),
          referees_fact: new FormControl(report.referees_fact, [Validators.required]),
          others_fact: new FormControl(report.others_fact, [Validators.required]),
        });
        console.log(report);
      }
    );
  }

  ngOnDestroy(): void {
    if (this.rSub) {
      this.rSub.unsubscribe();
    }
  }

  onSubmit(value: any): void {
    this.report.countries_plan = value.countries_plan;
    this.report.regions_plan = value.regions_plan;
    this.report.educationEntity_plan = value.educationEntity_plan;
    this.report.sportsmen_plan = value.sportsmen_plan;
    this.report.coaches_plan = value.coaches_plan;
    this.report.referees_plan = value.referees_plan;
    this.report.others_plan = value.others_plan;
    this.report.countries_fact = value.countries_fact;
    this.report.regions_fact = value.regions_fact;
    this.report.educationEntity_fact = value.educationEntity_fact;
    this.report.sportsmen_fact = value.sportsmen_fact;
    this.report.coaches_fact = value.coaches_fact;
    this.report.referees_fact = value.referees_fact;
    this.report.others_fact = value.others_fact;
    this.reportService.updateStatistic(this.report).subscribe(
      () => this.router.navigate(['admin', 'statistic'])
    );
  }

}
