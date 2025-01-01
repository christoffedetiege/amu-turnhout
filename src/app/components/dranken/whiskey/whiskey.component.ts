import {Component, Input, OnInit} from '@angular/core';
import {DrankKaart} from '../../../model/kaartitems-drank/drankkaart';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-whiskey',
  template: '<app-template-drankkaart [drankkaart]="drankkaart"></app-template-drankkaart>'
})
export class WhiskeyComponent implements OnInit {
  drankkaart!: DrankKaart;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.drankkaart = this.route.snapshot.data.drankkaart;
  }
}
