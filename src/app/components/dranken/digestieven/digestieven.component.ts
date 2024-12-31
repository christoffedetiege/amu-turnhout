import {Component, Input} from '@angular/core';
import {DrankKaart} from '../../../model/kaartitems-drank/drankkaart';

@Component({
  selector: 'app-digestieven',
  template: '<app-template-drankkaart [drankkaart]="drankKaart"></app-template-drankkaart>'
})
export class DigestievenComponent {
  @Input() drankKaart!: DrankKaart;
  constructor() { }
}
