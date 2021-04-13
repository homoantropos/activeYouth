import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

import {Appointment, AppointmentFinancing, Members, Place, SportKind} from '../../../shared/interfases';
import {Router} from '@angular/router';
import {AppointmentService} from '../../../shared/services/appointment.service';
import {DateProviderService} from '../../../shared/services/date-provider.service';
import {basicExpensesFact, basicExpensesPlan} from '../../../../environments/environment';
import {AppointmentFinancingService} from '../../../shared/services/appointment-financing.service';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {AutoUpdateArrays} from '../../../shared/utils/autoUpdateArrays';

@Component({
  selector: 'app-appointment-creator',
  templateUrl: './appointment-creator.component.html',
  styleUrls: ['./appointment-creator.component.css']
})

export class AppointmentCreatorComponent implements OnInit {
  // @ts-ignore
  appointmentCreatorForm: FormGroup;
  // @ts-ignore
  filteredOptions: Observable<string[]>;
  // @ts-ignore
  sportKinds: Array<SportKind>;

  constructor(
    private appointmentService: AppointmentService,
    private dateProvider: DateProviderService,
    private appointmentFinancingService: AppointmentFinancingService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.appointmentCreatorForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      startDate: new FormControl('', [Validators.required]),
      finishDate: new FormControl('', [Validators.required]),
      place: new FormGroup({
        country: new FormControl('', [Validators.required]),
        region: new FormControl(''),
        town: new FormControl('', [Validators.required]),
        sportHallName: new FormControl(''),
        address: new FormControl('')
      }),
      members: new FormGroup({
        countries: new FormControl('', [Validators.required]),
        regions: new FormControl('', [Validators.required]),
        educationEntity: new FormControl('', [Validators.required]),
        sportsmen: new FormControl('', [Validators.required]),
        coaches: new FormControl('', [Validators.required]),
        referees: new FormControl('', [Validators.required]),
        others: new FormControl('', [Validators.required]),
      }),
      organizationsParticipants: new FormControl('', [Validators.required]),
      KPKV: new FormControl('2201310'),
      character: new FormControl('', [Validators.required]),
      participants: new FormControl('', [Validators.required]),
      sportKind: new FormControl('', [Validators.required]),
      direction: new FormControl('', [Validators.required]),
      status: new FormControl('', [Validators.required]),
      organiser: new FormControl('', [Validators.required])
    });

    // @ts-ignore
    this.filteredOptions = this.appointmentCreatorForm.get('sportKind').valueChanges
      .pipe(
        startWith(''),
        map((value: string) => this._filter(value))
      );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return AutoUpdateArrays.sportKinds.filter(option => option.toLowerCase().includes(filterValue));
  }

  onCreate(value: any): void {
    value.duration = this.dateProvider.provideDuration(value.startDate, value.finishDate);
    const place: Place = (value.place) as Place;
    const members: Members = (value.members) as Members;
    const appointment: Appointment = (value) as Appointment;
    this.appointmentService.saveAppointmentToDb(appointment).pipe()
      .subscribe(
        (a) => {
          // @ts-ignore
          console.log('after saving', a);
          const appointmentFinancing: AppointmentFinancing = {
            appointment: a,
            expensesPlan: basicExpensesPlan,
            expensesFact: basicExpensesFact
          };
          this.appointmentFinancingService.createAppointmentFinancing(appointmentFinancing).subscribe(
            apf => console.log(apf)
          );
          this.appointmentCreatorForm.reset();
          this.router.navigate(['admin', 'schedule']);
          alert('ваш захід додано!');
        }
      );
  }
}

/* TODO:
* 1. Додати поля для внесення запланованих показників залучення до заходу.
* 2. Додати довідники для країн, регіонів, міст, спортивних заходів.
* 3. Додати валідацію - вибір країн тощо виключно з випадаючого списку "на льоту" -
*    підсказка вірної країни/регіону повинна виникати під час набору.
* 4. Додати можливість запам'ятовувати свій варіант під час внесення місця проведення,
*    якщо такого не знайшлося в довіднику.
* 5. Додати одночасне створення екземпляру події разом з статистикою і фінансуванням.
* 6. Додати валідацію вводу цифр - під час введення статистики не повинні вносити брєд.
*/
