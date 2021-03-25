import { Component } from '@angular/core';

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
  constructor( ) { }

  changeOptions(): void {
    this.option = !this.option;
    if(this.option) {
      this.buttonTitlestnd = '';
      this.buttonTitleEduEnt = 'ПЕРЕГЛЯНУТИ РЕЙТИНГ ЗАКЛАДІВ ОСВІТИ';
      this.ratingTitle = 'ЗДОБУВАЧІВ ОСВІТИ';
    } else {
      this.buttonTitlestnd = 'ПЕРЕГЛЯНУТИ РЕЙТИНГ ЗДОБУВАЧІВ ОСВІТИ';
      this.buttonTitleEduEnt = '';
      this.ratingTitle = 'ЗАКЛАДІВ ОСВІТИ';
    }
  }
}
