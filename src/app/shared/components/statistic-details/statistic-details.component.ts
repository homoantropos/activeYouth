import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {StatisticService} from '../../services/statistic.service';
import {NumbersOfParticipants, Statistic} from '../../interfases';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-statistic-details',
  templateUrl: './statistic-details.component.html',
  styleUrls: ['./statistic-details.component.css']
})
export class StatisticDetailsComponent implements OnInit {
  // @ts-ignore
  statistic: Statistic;
  displayedColumns: string [] = [
    'level', 'plan'
  ];
  datasource = ['країн', 'регіонів', 'закладів освіти', 'учасників', 'тренерів', 'суддів', 'інших', 'всього'];


  constructor(
    private route: ActivatedRoute,
    private statService: StatisticService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => this.statService.getStatisticByID(params.id)
        .subscribe(
          s => {
            this.statistic = s;
          }
        )
    );
  }

}
