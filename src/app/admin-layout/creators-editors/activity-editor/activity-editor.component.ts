import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivityService} from '../../../shared/services/activity.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Activity} from '../../../shared/interfases';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-activity-editor',
  templateUrl: './activity-editor.component.html',
  styleUrls: ['./activity-editor.component.css']
})
export class ActivityEditorComponent implements OnInit, OnDestroy {
  submitted = false;
  // @ts-ignore
  activitiesEditorForm: FormGroup;
  // @ts-ignore
  activityId: number;
  aSub: Subscription = new Subscription();

  constructor(
    private route: ActivatedRoute,
    private activityService: ActivityService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => this.activityId = (params.id) as number);
    this.aSub = this.activityService.getActivityByID(this.activityId).subscribe(
      (activity: Activity) => {
        this.activitiesEditorForm = new FormGroup({
          title: new FormControl(activity.title, [
            Validators.required
          ]),
          author: new FormControl(activity.author, [
            Validators.required
          ]),
          content: new FormControl(activity.content, [
            Validators.required
          ])
        });
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
      id: this.activityId
    };
    this.activityService.updateActivity(activity).subscribe((act) => {
      this.activitiesEditorForm.reset();
      this.submitted = false;
      this.router.navigate(['admin', 'activities']);
      alert('Вітаємо! Ваші зміни успішно додано в базу даних!');
    });
  }

  ngOnDestroy(): void {
    if (this.aSub) {
      this.aSub.unsubscribe();
    }
  }

}

