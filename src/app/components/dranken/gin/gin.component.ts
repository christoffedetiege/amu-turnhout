import {Component, Input, OnInit} from '@angular/core';
import {DrankKaart} from '../../../model/kaartitems-drank/drankkaart';

@Component({
  selector: 'app-gin',
  template: '<app-template-drankkaart [drankkaart]="drankKaart"></app-template-drankkaart>'
})
export class GinComponent {
  @Input() drankKaart!: DrankKaart;
  constructor() { }
}
