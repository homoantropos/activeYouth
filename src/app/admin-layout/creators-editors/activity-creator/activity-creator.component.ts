import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Activity} from '../../../shared/interfases';
import {Router} from '@angular/router';
import {ActivityService} from '../../../shared/services/activity.service';
import {Subscription} from 'rxjs';
import {AlertService} from '../../../shared/services/alert.service';

@Component({
  selector: 'app-activity-creator',
  templateUrl: './activity-creator.component.html',
  styleUrls: ['./activity-creator.component.css']
})

export class ActivityCreatorComponent implements OnInit, OnDestroy, AfterViewInit {
  submitted = false;
  activitiesCreatorForm: FormGroup;
  aSub: Subscription;
  @ViewChild('title') title: ElementRef;

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

  ngAfterViewInit(): void {
    this.title.nativeElement.focus();
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
      kindOfActivity: 'physical culture'
    };
    this.aSub = this.activityService.createActivity(activity).subscribe(() => {
      this.router.navigate(['admin', 'activities']);
      this.alert.success('Вітаємо! Ваш урок успішно додано в базу даних!');
    });
  }

  ngOnDestroy(): void {
    if (this.aSub) {
      this.aSub.unsubscribe();
    }
  }
}
