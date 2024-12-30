import { Component, OnInit } from '@angular/core';
import { DrankService } from '../../services/drank.service';
import { KaartitemDrank } from '../../model/kaartitem2drank';

@Component({
  selector: 'app-bier-suggesties',
  templateUrl: './bier-suggesties.component.html'
})
export class BierSuggestiesComponent implements OnInit {

  bierSuggesties!: KaartitemDrank[];
  constructor(private drankenService: DrankService) { }

  ngOnInit(): void {
    this.drankenService.getBierSuggesties()
      .subscribe((biersuggestie: KaartitemDrank[]) => {
        this.bierSuggesties = biersuggestie;
      })
  }

}
