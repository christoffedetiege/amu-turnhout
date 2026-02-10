import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gesloten',
  templateUrl: './gesloten.component.html'
})
export class GeslotenComponent implements OnInit {

  zichtbaar: boolean;

  constructor() {
    const vandaag = new Date();
    const eindDatum = new Date(2026, 0, 7, 23, 59, 59);
    this.zichtbaar = vandaag <= eindDatum;
  }

  ngOnInit(): void {
  }

}
