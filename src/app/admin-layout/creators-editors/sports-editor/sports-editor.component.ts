import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

import {ActivityService} from '../../../shared/services/activity.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Activity} from '../../../shared/interfases';
import {Subscription} from 'rxjs';
import {AuthService} from '../../auth/auth.service';

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
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => this.activityId = (params.id) as number);
    this.activityService.getActivityByID(this.activityId).subscribe(
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
    const activity: Activity = {
      title: this.sportsEditorForm.value.title,
      author: this.sportsEditorForm.value.author,
      content: this.sportsEditorForm.value.content,
      kindOfActivity: 'sport',
      _id: this.activityId
    };
    console.log(activity);
    this.sSub = this.activityService.updateActivity(activity).subscribe(a => {
      this.activityId = 0;
      this.sportsEditorForm.reset();
      this.submitted = false;
      this.router.navigate(['admin', 'sports']);
      alert('Вітаємо! Ваші зміни успішно додано в базу даних!');
    });
  }

  ngOnDestroy(): void {
    if (this.sSub) {
      this.sSub.unsubscribe();
    }
  }

}

