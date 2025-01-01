import {Component, Input, OnInit} from '@angular/core';
import {DrankKaart} from '../../../model/kaartitems-drank/drankkaart';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-digestieven',
  template: '<app-template-drankkaart [drankkaart]="drankkaart"></app-template-drankkaart>'
})
export class DigestievenComponent implements OnInit {
  drankkaart!: DrankKaart;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.drankkaart = this.route.snapshot.data.drankkaart;
    console.log('digestieven', this.drankkaart);
  }
}
