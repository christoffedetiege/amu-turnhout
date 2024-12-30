import {Component, Input, OnInit} from '@angular/core';
import {WijnkaartItem} from '../../../model/kaaartitems-wijn/wijnkaart-item';

@Component({
  selector: 'app-wijn-kaart-item',
  templateUrl: './wijn-kaart-item.component.html'
})
export class WijnKaartItemComponent implements OnInit {
  @Input() wijn!: WijnkaartItem;
  constructor() { }

  ngOnInit(): void {
  }

}
