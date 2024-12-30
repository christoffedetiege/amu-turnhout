import { Component, OnInit } from '@angular/core';
import {KaartItemsDrank} from '../../../model/kaartitems-drank/kaart-items-drank';
import {DrankService} from '../../../services/drank.service';

@Component({
  selector: 'app-whiskey',
  templateUrl: './whiskey.component.html'
})
export class WhiskeyComponent implements OnInit {

  whiskeys!: KaartItemsDrank;
  constructor(private drankenservice: DrankService) { }

  ngOnInit(): void {
    this.drankenservice.getWhiskey()
      .subscribe((whiskys: KaartItemsDrank) => {
        this.whiskeys = whiskys;
      });
  }
}
