import {Component, OnInit} from '@angular/core';
import {WijnKaart} from '../../../model/kaaartitems-wijn/wijnkaart';
import {DrankService} from '../../../services/drank.service';


@Component({
  selector: 'app-wijnkaart',
  template: '<app-wijnkaart-template [wijnkaart]="wijnkaart"></app-wijnkaart-template>'
})
export class WijnkaartComponent implements OnInit {
  wijnkaart!: WijnKaart;

  constructor(private drankService: DrankService) {
  }

  ngOnInit(): void {
    this.drankService.getWijnKaart()
      .subscribe((wijnkaart: WijnKaart) => {
        this.wijnkaart = wijnkaart;
      });
  }

}
