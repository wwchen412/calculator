import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-calculator-output',
  templateUrl: './calculator-output.component.html',
  styleUrls: ['./calculator-output.component.scss']
})
export class CalculatorOutputComponent implements OnInit {

  @Input()
  exportNum;
  constructor() { }

  ngOnInit() {
  }

}
