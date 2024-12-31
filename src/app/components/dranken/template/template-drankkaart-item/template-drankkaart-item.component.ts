import {Component, Input} from '@angular/core';
import {DrankkaartItem} from '../../../../model/kaartitems-drank/drankkaart-item';

@Component({
  selector: 'app-template-drankkaart-item',
  templateUrl: './template-drankkaart-item.component.html'
})
export class TemplateDrankkaartItemComponent {
  @Input() item!: DrankkaartItem;
  constructor() { }
}
