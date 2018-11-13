import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ExportNumService } from '../export-num.service';

@Component({
  selector: 'app-calculator-input',
  templateUrl: './calculator-input.component.html',
  styleUrls: ['./calculator-input.component.scss']
})
export class CalculatorInputComponent implements OnInit {

  @Input()
  exportNum: string;

  @Output()
  sendNum = new EventEmitter<string>();

  constructor(public exportsvc: ExportNumService) {
    this.exportsvc = exportsvc;
   }


  ngOnInit() {


  }
  emitSendNum($event) {
    this.exportsvc.countNum();
  }

}
