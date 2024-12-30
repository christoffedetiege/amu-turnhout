import {Component, Input} from '@angular/core';
import {WijnKaart} from '../../../model/kaaartitems-wijn/wijnkaart';

@Component({
  selector: 'app-wijnkaart-template',
  templateUrl: './wijnkaart-template.component.html'
})
export class WijnkaartTemplateComponent {
  @Input() wijnkaart!: WijnKaart;
  constructor() { }
}
