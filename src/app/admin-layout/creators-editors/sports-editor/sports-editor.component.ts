import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

import {ActivityService} from '../../../shared/services/activity.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Activity} from '../../../shared/interfases';
import {Subscription} from 'rxjs';
import {AuthService} from '../../auth/auth.service';
import {switchMap} from 'rxjs/operators';
import {AlertService} from '../../../shared/services/alert.service';

@Component({
  selector: 'app-sports-editor',
  templateUrl: './sports-editor.component.html',
  styleUrls: ['./sports-editor.component.css']
})

export class SportsEditorComponent implements OnInit, OnDestroy {
  submitted = false;
  // @ts-ignore
  sportsEditorForm: FormGroup = null;
  // @ts-ignore
  activity: Activity;
  activityId = 0;
  sSub: Subscription = new Subscription();

  constructor(
    public auth: AuthService,
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
        this.activity = activity;
        this.sportsEditorForm = new FormGroup({
          title: new FormControl(this.activity.title, [
            Validators.required
          ]),
          author: new FormControl(this.activity.author, [
            Validators.required
          ]),
          content: new FormControl(this.activity.content, [
            Validators.required
          ])
        });
      }
    );
  }

  onEditActivity(): void {
    if (this.sportsEditorForm.invalid) {
      return;
    }
    this.submitted = true;
    this.sportsEditorForm.disable();
    const activity: Activity = {
      title: this.sportsEditorForm.value.title,
      author: this.sportsEditorForm.value.author,
      content: this.sportsEditorForm.value.content,
      kindOfActivity: 'sport',
      id: this.activityId
    };
    this.sSub = this.activityService.updateActivity(activity)
      .subscribe(res => {
          this.submitted = false;
          this.router.navigate(['admin', 'sports']);
          this.alert.success(res.message);
        }, error => {
          this.alert.warning(error.message);
          this.sportsEditorForm.enable();
        }
      );
    this.sportsEditorForm.enable();
    this.ngOnInit();
  }

  ngOnDestroy(): void {
    if (this.sSub) {
      this.sSub.unsubscribe();
    }
  }

}

