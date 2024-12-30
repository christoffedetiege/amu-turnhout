import { Component, OnInit } from '@angular/core';
import {MenuService} from '../../services/menu.service';
import {DrankService} from '../../services/drank.service';
import {KaartItem} from '../../model/kaart-item';
import {MenuProduct} from '../../model/menuproduct';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  menuproducuten!: MenuProduct[];
  desserten!: KaartItem[];
  suggestieDigestief!: KaartItem[];
  constructor(private menuService: MenuService,
              private drankService: DrankService) { }

  ngOnInit(): void {
    this.laden();
  }

  public laden(): void {
    this.menuService.getMenuProducten()
      .subscribe((menuProducten: MenuProduct[]) => {
      this.menuproducuten = menuProducten;
    });


    this.menuService.getDesserten()
      .subscribe((desserten: KaartItem[]) => {
        this.desserten = desserten;
      });
    this.drankService.getSuggestieDigestief()
      .subscribe((suggestieDigestieven: KaartItem[]) => {
        this.suggestieDigestief = suggestieDigestieven;
      });
  }

}
