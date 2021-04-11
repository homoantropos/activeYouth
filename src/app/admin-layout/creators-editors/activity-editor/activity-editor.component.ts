import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivityService} from '../../../shared/services/activity.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Activity} from '../../../shared/interfases';

@Component({
  selector: 'app-activity-editor',
  templateUrl: './activity-editor.component.html',
  styleUrls: ['./activity-editor.component.css']
})
export class ActivityEditorComponent implements OnInit {
  submitted = false;
  // @ts-ignore
  activitiesEditorForm: FormGroup;
  // @ts-ignore
  activityId: number;
  // @ts-ignore
  activity: Activity;

  constructor(
    private activityService: ActivityService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.activityId = (params.id) as number;
        console.log(this.activityId);
      }
    );
    this.activityService.getActivityByID(this.activityId).subscribe(
      (activity: Activity) => {
        this.activity = activity;
        this.activitiesEditorForm = new FormGroup({
          title: new FormControl(this.activity.title, [
            Validators.required
          ]),
          author: new FormControl(this.activity.author, [
            Validators.required
          ]),
          content: new FormControl(this.activity.content, [
            Validators.required
          ])
        });;
      }
    );

  }

  onChangeActivity(): void {
    if (this.activitiesEditorForm.invalid) {
      return;
    }
    this.submitted = true;
    const activity: Activity = {
      title: this.activitiesEditorForm.value.title,
      author: this.activitiesEditorForm.value.author,
      content: this.activitiesEditorForm.value.content,
      kindOfActivity: 'physical culture',
      _id: this.activityId
    };
    this.activityService.updateActivity(activity).subscribe(() => {
      this.activitiesEditorForm.reset();
      this.submitted = false;
      this.router.navigate(['admin', 'activities']);
      alert('Вітаємо! Ваш урок успішно додано в базу даних!');
    });
  }

}

