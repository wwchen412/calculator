import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-calculator-input',
  templateUrl: './calculator-input.component.html',
  styleUrls: ['./calculator-input.component.scss']
})
export class CalculatorInputComponent implements OnInit {

  @Input() doNum;

  constructor() { }

  ngOnInit() {
  }

}
