import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
    <p>
      button works!
    </p>
    <h3>{{ name }}</h3>
  `,
  styles: [`
    h3 {
      background-color: orange;
    }
  `],
  encapsulation: ViewEncapsulation.Native
})
export class ButtonComponent implements OnInit {
  @Input() name = 'Willem';

  constructor() { }

  ngOnInit() {
  }

}
