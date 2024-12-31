import {Component, Input} from '@angular/core';
import {DrankKaart} from '../../../model/kaartitems-drank/drankkaart';

@Component({
  selector: 'app-warmedranken',
  template: '<app-template-drankkaart [drankkaart]="drankKaart"></app-template-drankkaart>'
})
export class WarmedrankenComponent {
  @Input() drankKaart!: DrankKaart;
  constructor() { }


}
