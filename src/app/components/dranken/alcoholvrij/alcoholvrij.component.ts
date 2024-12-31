import {Component, Input, OnInit} from '@angular/core';
import {DrankKaart} from '../../../model/kaartitems-drank/drankkaart';

@Component({
  selector: 'app-alcoholvrij',
  template: '<app-template-drankkaart [drankkaart]="drankKaart"></app-template-drankkaart>'
})
export class AlcoholvrijComponent {
  @Input() drankKaart!: DrankKaart;
  constructor() { }
}
