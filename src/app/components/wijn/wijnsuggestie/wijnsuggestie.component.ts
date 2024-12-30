import {Component, OnInit} from '@angular/core';
import {DrankService} from '../../../services/drank.service';
import {WijnKaart} from '../../../model/kaaartitems-wijn/wijnkaart';


@Component({
  selector: 'app-wijnsuggestie',
  template: '<app-wijnkaart-template [wijnkaart]="wijnkaart"></app-wijnkaart-template>'
})
export class WijnsuggestieComponent implements OnInit {

  wijnkaart!: WijnKaart;

  constructor(private drankenService: DrankService) {
  }

  ngOnInit(): void {
    this.drankenService.getWijnSuggestie()
      .subscribe((w: WijnKaart) => {
        this.wijnkaart = w;
      });
  }
}
