import { Component, Input, OnInit } from '@angular/core';
import {DrankkaartItem} from '../../../model/kaartitems-drank/drankkaart-item';

@Component({
  selector: 'app-kaart-item-drank',
  templateUrl: './kaart-item-drank.component.html'
})
export class KaartItemDrankComponent implements OnInit {

  @Input() item!: DrankkaartItem;
  constructor() { }

  ngOnInit(): void {
  }

}
