import {Component, Input} from '@angular/core';
import {DrankKaart} from '../../../../model/kaartitems-drank/drankkaart';

@Component({
  selector: 'app-template-drankkaart',
  templateUrl: './template-drankkaart.component.html'
})
export class TemplateDrankKaartComponent {
  @Input() drankkaart!: DrankKaart;
  constructor() { }
}
