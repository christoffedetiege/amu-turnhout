import { Component, OnInit } from '@angular/core';
import { DrankService } from '../../services/drank.service';
import { AperoBierFris } from '../../model/aperoBierFris';

@Component({
  selector: 'app-alcoholvrij',
  templateUrl: './alcoholvrij.component.html'
})
export class AlcoholvrijComponent implements OnInit {

  constructor(private drankService: DrankService) { }
  aperoBierFris!: AperoBierFris;
  ngOnInit(): void {
    this.drankService.getAperBierFris()
      .subscribe((aperBierFris: AperoBierFris) => {
        this.aperoBierFris = aperBierFris;
      });
  }

}
