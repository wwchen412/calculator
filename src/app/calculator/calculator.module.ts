import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculatorInputComponent } from './calculator-input/calculator-input.component';
import { CalculatorOutputComponent } from './calculator-output/calculator-output.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CalculatorInputComponent, CalculatorOutputComponent],
  exports: [CalculatorInputComponent, CalculatorOutputComponent]
})
export class CalculatorModule { }
