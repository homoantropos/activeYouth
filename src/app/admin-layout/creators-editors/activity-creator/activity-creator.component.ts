import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Activity} from '../../../shared/interfases';
import {Router} from '@angular/router';
import {ActivityService} from '../../../shared/services/activity.service';

@Component({
  selector: 'app-activity-creator',
  templateUrl: './activity-creator.component.html',
  styleUrls: ['./activity-creator.component.css']
})
export class ActivityCreatorComponent implements OnInit {
  submitted = false;
  // @ts-ignore
  activitiesCreatorForm: FormGroup;
  constructor(
    private activityServise: ActivityService,
    private router: Router
  ) { }

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
      kindOfActivity: 'physical culture',
      date: new Date()
    };
    this.activityServise.createActivity(activity).subscribe(a => {
      activity.id = a.id;
      activity.kindOfActivity = a.kindOfActivity;
      this.activitiesCreatorForm.reset();
      this.submitted = false;
      this.router.navigate(['admin', 'activities']);
      alert('Вітаємо! Ваш урок успішно додано в базу даних!');
    });
  }

}
