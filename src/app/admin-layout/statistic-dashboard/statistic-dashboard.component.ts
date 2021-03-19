import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {Statistic} from '../../shared/interfases';
import {MockDataBase} from '../../thoseWillBeDeletedAfterDBCreating/mockDB';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';

@Component({
  selector: 'app-statistic-dashboard',
  templateUrl: './statistic-dashboard.component.html',
  styleUrls: ['./statistic-dashboard.component.css']
})
export class StatisticDashboardComponent implements AfterViewInit {

  title = 'table-lesson';
  displayedColumns = [
    'title',
    'termsOfHolding',
    'placeOfHolding',
    'numberOfCountries',
    'numberOfRegions',
    'numberOfEduEnt',
    'numberOfSportsmen',
    'numberOfCoaches',
    'numberOfReferees',
    'numberOfOthers',
    'total'
  ];
  dataSource2: MatTableDataSource<Statistic> = new MatTableDataSource<Statistic>(MockDataBase.statistics);
  // @ts-ignore
  @ViewChild(MatPaginator) paginator: MatPaginator;
  // @ts-ignore
  @ViewChild(MatSort) sort: MatSort;

  constructor() { }

  ngAfterViewInit(): void {
    this.dataSource2.paginator = this.paginator;
    this.dataSource2.sort = this.sort;
  }

}