import {Component, OnInit} from '@angular/core';
import {ActivityService} from '../../services/activity.service';
import {ActivatedRoute, Params} from '@angular/router';
import {Activity} from '../../interfases';

@Component({
  selector: 'app-activity-details',
  templateUrl: './activity-details.component.html',
  styleUrls: ['./activity-details.component.css']
})
export class ActivityDetailsComponent implements OnInit {
  // @ts-ignore
  activity: Activity;

  constructor(
    private activityService: ActivityService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => this.activityService.getActivityByID(params.id).subscribe(
        a => this.activity = a
      )
    );
  }

}
