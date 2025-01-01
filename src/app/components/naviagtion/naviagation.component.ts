import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-naviagation',
  templateUrl: './naviagation.component.html'
})

export class NaviagationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onClick(): void {
    console.log('cc');
    const element = document.getElementById('myTopnav');
    console.log(element);
    element.className = 'topnav';

  }
  myFunction() {
    const x = document.getElementById('myTopnav');
    if (x.className === 'topnav') {
      x.className += ' responsive';
    } else {
      x.className = 'topnav';

    }
  }


}

