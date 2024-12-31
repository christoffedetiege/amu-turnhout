import {Component, Input} from '@angular/core';
import {DrankKaart} from '../../../model/kaartitems-drank/drankkaart';

@Component({
  selector: 'app-bier-suggesties',
  template: '<app-template-drankkaart [drankkaart]="drankKaart"></app-template-drankkaart>'
})
export class BierSuggestiesComponent {
  @Input() drankKaart!: DrankKaart;
  constructor() { }


}
