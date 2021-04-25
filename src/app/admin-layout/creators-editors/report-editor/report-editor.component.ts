import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Subscription} from 'rxjs';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {ReportService} from '../../../shared/services/report.service';

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
  ) { }

  ngOnInit(): void {
    this.rSub = this.route.params.subscribe(
      (params: Params) => this.reportId = params.id
    );
    this.rSub = this.reportService.getStatisticByID(this.reportId).subscribe(
      report => {
        this.report = report;
        console.log(report);
        this.reportEditorForm = new FormGroup({
          countries_plan: new FormControl(report.countries_plan, [Validators.required]),
          regions_plan: new FormControl(report.regions_plan, [Validators.required]),
          educationEntity_plan: new FormControl(report.educationentity_plan, [Validators.required]),
          sportsmen_plan: new FormControl(report.sportsmen_plan, [Validators.required]),
          coaches_plan: new FormControl(report.coaches_plan, [Validators.required]),
          referees_plan: new FormControl(report.referees_plan, [Validators.required]),
          others_plan: new FormControl(report.others_plan, [Validators.required]),
          countries_fact: new FormControl(0, [Validators.required]),
          regions_fact: new FormControl(0, [Validators.required]),
          educationEntity_fact: new FormControl(0, [Validators.required]),
          sportsmen_fact: new FormControl(0, [Validators.required]),
          coaches_fact: new FormControl(0, [Validators.required]),
          referees_fact: new FormControl(0, [Validators.required]),
          others_fact: new FormControl(0, [Validators.required]),
        });
      }
    );
  }

  ngOnDestroy(): void {
    if (this.rSub) {
      this.rSub.unsubscribe();
    }
  }

  onSubmit(value: any): void {
    value.report_id = Number(this.reportId);
    value.title = this.report.title;
    this.reportService.updateStatistic(value).subscribe(
      () => this.router.navigate(['admin', 'statistic'])
    );
  }

}
