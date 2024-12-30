import { Component, OnInit } from '@angular/core';
import {DrankService} from '../../services/drank.service';
import {Gin} from '../../model/gin';

@Component({
  selector: 'app-gin',
  templateUrl: './gin.component.html'
})
export class GinComponent implements OnInit {
  gins!: Gin[];
  constructor(private drankservice: DrankService) { }

  ngOnInit(): void {
    this.drankservice.getGin()
      .subscribe((gins: Gin[]) => {
        this.gins = gins;
      });
  }

}
