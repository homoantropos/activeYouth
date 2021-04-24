import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {Report} from '../../shared/interfases';
import {MockDataBase} from '../../thoseWillBeDeletedAfterDBCreating/mockDB';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {Router} from '@angular/router';
import {ReportService} from '../../shared/services/report.service';

@Component({
  selector: 'app-statistic-dashboard',
  templateUrl: './statistic-dashboard.component.html',
  styleUrls: ['./statistic-dashboard.component.css']
})
export class StatisticDashboardComponent implements OnInit, AfterViewInit {

  paginatorStartPageNumber = 1;
  displayedColumns = [
    'appointment.title',
    'termsOfHolding',
    'place',
    'numberOfCountries',
    'numberOfRegions',
    'numberOfEduEnt',
    'numberOfSportsmen',
    'numberOfCoaches',
    'numberOfReferees',
    'numberOfOthers',
    'total',
  ];
  // @ts-ignore
  dataSource2: MatTableDataSource<Report>;
  // @ts-ignore
  @ViewChild(MatPaginator) paginator: MatPaginator;
  // @ts-ignore
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private router: Router,
    private reportService: ReportService
  ) {
  }

  ngOnInit(): void {
    this.reportService.getAllReports().subscribe(
      reports => {
        MockDataBase.statistics = reports.slice();
        console.log(reports);
        this.dataSource2 = new MatTableDataSource<Report>(MockDataBase.statistics);
      }
    );
  }

  ngAfterViewInit(): void {
    this.dataSource2.paginator = this.paginator;
    this.dataSource2.sort = this.sort;
  }

  goToStatDetails(s: Report): void {
    this.router.navigateByUrl(`/admin/statistic/${s.report_id}`);
  }
}
