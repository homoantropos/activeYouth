import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-rating-page',
  templateUrl: './rating-page.component.html',
  styleUrls: ['./rating-page.component.css']
})
export class RatingPageComponent {
  buttonTitlestnd = '';
  buttonTitleEduEnt = 'ПЕРЕГЛЯНУТИ РЕЙТИНГ ЗАКЛАДІВ ОСВІТИ';
  ratingTitle = 'ЗДОБУВАЧІВ ОСВІТИ';
  option = true;
  constructor(
    private router: Router
  ) { }

  changeOptions(): void {
    this.option = !this.option;
    if(this.option) {
      this.buttonTitlestnd = '';
      this.buttonTitleEduEnt = 'ПЕРЕГЛЯНУТИ РЕЙТИНГ ЗАКЛАДІВ ОСВІТИ';
      this.ratingTitle = 'ЗДОБУВАЧІВ ОСВІТИ';
      this.router.navigate(['rating', 'eduentity']);
    } else {
      this.buttonTitlestnd = 'ПЕРЕГЛЯНУТИ РЕЙТИНГ ЗДОБУВАЧІВ ОСВІТИ';
      this.buttonTitleEduEnt = '';
      this.ratingTitle = 'ЗАКЛАДІВ ОСВІТИ';
      this.router.navigate(['rating']);
    }
  }
}
