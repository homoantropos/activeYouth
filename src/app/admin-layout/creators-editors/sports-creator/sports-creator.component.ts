import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

import {Activity} from '../../../shared/interfases';
import {ActivityService} from '../../../shared/services/activity.service';
import {AlertService} from '../../../shared/services/alert.service';

@Component({
  selector: 'app-sports-creator',
  templateUrl: './sports-creator.component.html',
  styleUrls: ['./sports-creator.component.css']
})

export class SportsCreatorComponent implements OnInit {
  submitted = false;
  // @ts-ignore
  activitiesCreatorForm: FormGroup;

  constructor(
    private activityService: ActivityService,
    private router: Router,
    private alert: AlertService
  ) {
  }

  ngOnInit(): void {
    this.activitiesCreatorForm = new FormGroup({
      title: new FormControl(null, [
        Validators.required
      ]),
      author: new FormControl(null, [
        Validators.required
      ]),
      content: new FormControl(null, [
        Validators.required
      ])
    });
  }

  onCreateActivity(): void {
    if (this.activitiesCreatorForm.invalid) {
      return;
    }
    this.submitted = true;
    const activity: Activity = {
      title: this.activitiesCreatorForm.value.title,
      author: this.activitiesCreatorForm.value.author,
      content: this.activitiesCreatorForm.value.content,
      kindOfActivity: 'sport',
      date: new Date()
    };
    this.activityService.createActivity(activity).subscribe(a => {
      this.activitiesCreatorForm.reset();
      this.submitted = false;
      this.router.navigate(['admin', 'sports']);
      this.alert.success('Вітаємо! Ваш урок успішно додано в базу даних!');
    });
  }

}
