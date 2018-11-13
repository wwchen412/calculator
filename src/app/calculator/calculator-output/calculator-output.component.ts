import { Component, OnInit, Input } from '@angular/core';
import { ExportNumService } from '../export-num.service';
@Component({
  selector: 'app-calculator-output',
  templateUrl: './calculator-output.component.html',
  styleUrls: ['./calculator-output.component.scss']
})
export class CalculatorOutputComponent implements OnInit {

  @Input()
  exportNum;

  constructor(public exportsvc: ExportNumService) {
    this.exportsvc = exportsvc;
   }

  ngOnInit() {
  }

}
