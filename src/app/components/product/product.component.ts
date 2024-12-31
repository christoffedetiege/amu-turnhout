import { Component, Input, OnInit } from '@angular/core';
import {MenuProduct} from '../../model/menuproduct';


@Component({
  selector: 'app-product',
  template: '<div class="product"><p class="titel">{{item.product}}<br/></p></div>'
})
export class ProductComponent implements OnInit {

  @Input() item!: MenuProduct;
  constructor() { }

  ngOnInit(): void {
  }

}
