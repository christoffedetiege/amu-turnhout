import {Component, Input, OnInit} from '@angular/core';
import {DrankKaart} from '../../../model/kaartitems-drank/drankkaart';


@Component({
  selector: 'app-aperitieven',
  template: '<app-template-drankkaart [drankkaart]="drankKaart"></app-template-drankkaart>'
})
export class AperitievenComponent {
  @Input() drankKaart!: DrankKaart;
  constructor() { }

}
