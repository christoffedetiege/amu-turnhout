import {Component, Input, OnInit} from '@angular/core';
import {KaartItem} from "../../model/kaart-item";


@Component({
  selector: 'app-kaart-item',
  template: '<div class="kaartitem"><p class="titel">{{kaartItem.titel}}<br/><span *ngIf="kaartItem.omschrijving">{{kaartItem.omschrijving}}</span></p><p class="prijs">{{kaartItem.prijs | currency:\'EUR\'}}</p></div>'
})
export class KaartItemComponent implements OnInit {
  @Input() kaartItem!: KaartItem;
  constructor() { }

  ngOnInit(): void {
  }

}
