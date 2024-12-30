import { Component, OnInit } from '@angular/core';
import {DrankService} from '../../services/drank.service';
import {Kaartitem} from '../../model/kaartitem';
import {Wijn} from '../../model/wijn';
import {Wijn2} from '../../model/wijn2';

@Component({
  selector: 'app-digestieven',
  templateUrl: './digestieven.component.html'
})
export class DigestievenComponent implements OnInit {

  constructor(private drankService: DrankService) { }
  digestieven!: Kaartitem[];
  digestievengemengd!: Kaartitem[];
  dessertwijnen!: Wijn[];
  dessertWijnen2!: Wijn2[];
  grappa!: Kaartitem[];
  ngOnInit(): void {
    this.drankService.getDigestieven()
      .subscribe((digestieven: Kaartitem[]) => {
          this.digestieven = digestieven;
      });
    this.drankService.getDessertWijn()
      .subscribe((dessertwijnen: Wijn[]) => {
        this.dessertwijnen = dessertwijnen;
      });
    this.drankService.getDessertWijn2()
      .subscribe((dessertwijn2: Wijn2[]) => {
        this.dessertWijnen2 = dessertwijn2;
      });
    this.drankService.getDigestievenGemengd()
      .subscribe((digestievengemengd: Kaartitem[]) => {
        this.digestievengemengd = digestievengemengd;
      });
    this.drankService.getGrappa()
      .subscribe((grappa: Kaartitem[]) => {
        this.grappa = grappa;
      });
  }

}
