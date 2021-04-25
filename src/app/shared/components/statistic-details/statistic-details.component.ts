import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {ReportService} from '../../services/report.service';
import {HttpResponse} from '@angular/common/http';

@Component({
  selector: 'app-statistic-details',
  templateUrl: './statistic-details.component.html',
  styleUrls: ['./statistic-details.component.css']
})
export class StatisticDetailsComponent implements OnInit {
  // @ts-ignore
  statistic: any;
  // @ts-ignore
  reportId: number;
  displayedColumns: string [] = [
    'level', 'plan'
  ];
  datasource = ['країн', 'регіонів', 'закладів освіти', 'учасників', 'тренерів', 'суддів', 'інших', 'всього'];


  constructor(
    private route: ActivatedRoute,
    private statService: ReportService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => this.reportId = params.id);
    this.statService.getStatisticByID(this.reportId).subscribe(
      responce => {
        this.statistic = responce;
      }
    );
  }

}
