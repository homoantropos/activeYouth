import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {DataBaseService} from '../../../shared/services/data-base.service';
import {Router} from '@angular/router';
import {Activity} from '../../../shared/interfases';
import {ActivityService} from '../../../shared/services/activity.service';

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
    private sportServise: ActivityService,
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
      kindOfActivity: 'sport',
      date: new Date()
    };
    this.sportServise.createActivity(activity).subscribe(a => {
      activity._id = a._id;
      activity.kindOfActivity = a.kindOfActivity;
      this.activitiesCreatorForm.reset();
      this.submitted = false;
      this.router.navigate(['admin', 'sports']);
      alert('Вітаємо! Ваш урок успішно додано в базу даних!');
    });
  }

}
