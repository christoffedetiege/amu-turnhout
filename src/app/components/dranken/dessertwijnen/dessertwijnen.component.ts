import {Component, Input} from '@angular/core';
import {DrankKaart} from '../../../model/kaartitems-drank/drankkaart';

@Component({
  selector: 'app-dessertwijnen',
  template: '<app-template-drankkaart [drankkaart]="drankKaart"></app-template-drankkaart>'
})
export class DessertwijnenComponent {
  @Input() drankKaart!: DrankKaart;
  constructor() {
  }
}
