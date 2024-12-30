import { Component, Input, OnInit } from '@angular/core';
import {MenuProduct} from '../../model/menuproduct';


@Component({
  selector: 'app-product',
  template: '<div class="kaartitem"><p style="text-align: center" class="item">{{item.product}}<br/></p></div>'
})
export class ProductComponent implements OnInit {

  @Input() item!: MenuProduct;
  constructor() { }

  ngOnInit(): void {
  }

}
