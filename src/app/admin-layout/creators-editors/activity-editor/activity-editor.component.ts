import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivityService} from '../../../shared/services/activity.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Activity} from '../../../shared/interfases';
import {Subscription} from 'rxjs';
import {switchMap} from 'rxjs/operators';
import {AlertService} from '../../../shared/services/alert.service';

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
    private router: Router,
    private alert: AlertService
  ) {
  }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap(
        (params: Params) => {
          this.activityId = params.get('id');
          return this.activityService.getActivityByID(params.get('id'));
        }
      )
    ).subscribe(
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
    this.activityService.updateActivity(activity).subscribe(res => {
      this.activitiesEditorForm.reset();
      this.submitted = false;
      this.router.navigate(['admin', 'activities']);
      this.alert.success(res.message);
    });
  }

  ngOnDestroy(): void {
    if (this.aSub) {
      this.aSub.unsubscribe();
    }
  }

}

