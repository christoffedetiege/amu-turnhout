import { Component, OnInit } from '@angular/core';
import {DrankService} from '../../services/drank.service';
import {AperoBierFris} from '../../model/aperoBierFris';
import { Gin } from '../../model/gin';


@Component({
  selector: 'app-aperitieven',
  templateUrl: './aperitieven.component.html'
})
export class AperitievenComponent implements OnInit {

  constructor(private drankService: DrankService) { }
  aperoBierFris!: AperoBierFris;
  gins!: Gin[];

  ngOnInit(): void {
    this.drankService.getAperBierFris()
      .subscribe((aperBierFris: AperoBierFris) => {
        this.aperoBierFris = aperBierFris;
      });
    this.drankService.getGin()
      .subscribe((gins: Gin[]) => {
        this.gins = gins;
      });
  }

}
