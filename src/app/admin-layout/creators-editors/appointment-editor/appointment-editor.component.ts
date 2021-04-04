import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appointment-editor',
  templateUrl: './appointment-editor.component.html',
  styleUrls: ['./appointment-editor.component.css']
})
export class AppointmentEditorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

/* TODO:
* 1. Всі маніпуляції з подією повинні автоматично синхронізуватися в базі даних з відповідними статистикою і фінансуванням.*/
