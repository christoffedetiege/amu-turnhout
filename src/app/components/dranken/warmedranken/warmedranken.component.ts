import { Component, OnInit } from '@angular/core';
import {DrankService} from '../../services/drank.service';
import {Kaartitem} from '../../model/kaartitem';
import {KoffieThee} from '../../model/koffiethee';

@Component({
  selector: 'app-warmedranken',
  templateUrl: './warmedranken.component.html'
})
export class WarmedrankenComponent implements OnInit {

  constructor(private drankService: DrankService) { }
  warmedranken!: KoffieThee;
  ngOnInit(): void {
    this.drankService.getKoffieThee()
      .subscribe((warmedranken: KoffieThee) => {
        this.warmedranken = warmedranken;
      });
  }

}
