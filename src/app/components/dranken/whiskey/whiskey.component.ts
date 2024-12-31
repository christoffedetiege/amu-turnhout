import {Component, Input} from '@angular/core';
import {DrankKaart} from '../../../model/kaartitems-drank/drankkaart';

@Component({
  selector: 'app-whiskey',
  template: '<app-template-drankkaart [drankkaart]="drankKaart"></app-template-drankkaart>'
})
export class WhiskeyComponent {
  @Input() drankKaart!: DrankKaart;
  constructor() { }
}
