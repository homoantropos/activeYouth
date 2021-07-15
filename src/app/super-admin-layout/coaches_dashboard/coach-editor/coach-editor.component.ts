import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {CoachService} from '../../services/coach.service';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-coach-editor',
  templateUrl: './coach-editor.component.html',
  styleUrls: ['./coach-editor.component.css']
})
export class CoachEditorComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private coachService: CoachService
  ) { }

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        switchMap(
          (params: Params) => {
              return this.coachService.getCoachById(params.get('id'));
          }
        )
      )
      .subscribe();
  }

}
