import {Component, OnInit} from '@angular/core';
import {DrankService} from '../../services/drank.service';
import {Wijn} from '../../model/wijn';
import {Wijn2} from '../../model/wijn2';

@Component({
  selector: 'app-dessertwijnen',
  templateUrl: './dessertwijnen.component.html'
})
export class DessertwijnenComponent implements OnInit {
  dessertWijnen!: Wijn[];
  dessertWijnen2!: Wijn2[];

  constructor(private drankService: DrankService) {
  }

  ngOnInit(): void {
    this.drankService.getDessertWijn()
      .subscribe((dessertwijn: Wijn[]) => {
        this.dessertWijnen = dessertwijn;
      });
    this.drankService.getDessertWijn2()
      .subscribe((dessertwijn2: Wijn2[]) => {
        this.dessertWijnen2 = dessertwijn2;
      });
  }

}
