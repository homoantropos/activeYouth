import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {Router} from '@angular/router';

import {Appointment} from '../../shared/interfases';
import {AppointmentService} from '../../shared/services/appointment.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-main-page',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})

export class ScheduleComponent implements OnInit, AfterViewInit {

  // @ts-ignore
  schedule$: Observable<Array<Appointment>>;
  currentPage = 1;
  displayedColumns: string[] = ['title', 'termsOfHolding', 'place', 'applyTeam'];
  paginatorConfig = { itemsPerPage: 10, currentPage: this.currentPage };
  // @ts-ignore
  @ViewChild(MatPaginator) paginator: MatPaginator;
  // @ts-ignore
  dataSource: MatTableDataSource<Appointment>;
  // @ts-ignore
  public userRole: string;

  constructor(
    private router: Router,
    private appointmentService: AppointmentService
  ) {
  }

  ngOnInit(): void {
    // @ts-ignore
    this.userRole = localStorage.getItem('role');
    this.schedule$ = this.appointmentService.getAllAppointmentPSQL();
  }

  ngAfterViewInit(): void {
  }

  goToApplicationForm(id: number): void {
    this.router.navigateByUrl(`admin/application/${id}`);
  }
}

/* TODO:
* 1. Вивід - тільки події певного року.
* 2. Додати можливість вибору року, щоб передивитися архів заходів.
* 3. Розбити показ заходів на два блоки - актуальні (дата початку ще не наступила) і архів (дата завершення вже наступила).
* 4. Додати css клас "актуальні події" - повинні кидатися в очі ті, які відбуваютсья прямо зараз.
* 5. Додати блок фільтрації: учні/студенти, фізичне виховання/спорт, міжнародні/всеукраїнські/регіональні, за роком, за місяцем.
* 6. Додати поле пошуку.
* 7. Ті, які не відбулися (без офіційних результатів) не повинні показуватись в архіві.
* 8. Додати можливість виводу повного календаря в форматі ексель.
* */

