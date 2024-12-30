import {Component, Input} from '@angular/core';
import {WijnKaart} from '../../../model/kaaartitems-wijn/wijnkaart';

@Component({
  selector: 'app-template-drankkaart.',
  templateUrl: './template-drankkaart.component.html'
})
export class DrankKaartTemplateComponent {
  @Input() wijnkaart!: WijnKaart;
  constructor() { }
}
