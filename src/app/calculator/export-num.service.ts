import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExportNumService {
  tempNum = 0;
  editing = false;
  operator = '';
  exportNum = '0';
  sendNum;

  constructor() { }
  run() {
    console.log(ExportNumService);
  }
  doNum(number) {

    // 如果輸入時數字是0
    if (this.exportNum === '0') {
      this.exportNum = number;
      this.editing = false;
    } else if (this.editing === true) {
        // 如果按了＋號並且輸入數字 取代掉目前的值並且記錄
          this.editing = false;
          this.exportNum = '';
          this.exportNum = number + '';
      } else {
      this.exportNum = this.exportNum + number.toString();
    }

  }
  // 清除數字
  clearNum() {
    this.exportNum = '0';
    this.tempNum = 0;

  }
  // 算式按鍵
  calculate(oprbtn: string) {
    this.operator = oprbtn;
    if ( this.editing === false && this.operator !== '-') {
      this.countNum();
      this.editing = true;
    } else if (this.operator === '-') {
      this.editing = true;
      this.tempNum = this.tempNum + parseFloat(this.exportNum);
    }

  }
  // +-號
  negative() {
    // this.tempNum = this.tempNum * -1;
    let negativeNum = 0;
    negativeNum = parseFloat(this.exportNum) * -1;
    this.exportNum = negativeNum.toString();
    this.sendNum.emit(this.exportNum);
  }
  percent() {

    let percentNum = 0;
    percentNum = parseFloat(this.exportNum) * 0.01;
    this.exportNum = percentNum.toString();
    this.sendNum.emit(this.exportNum);
  }
  // 運算結果
  countNum() {
    switch (this.operator) {
      case '+' :
        this.tempNum = this.tempNum + parseFloat(this.exportNum);
        break;
      case '-':
        this.tempNum = this.tempNum - parseFloat(this.exportNum);
        break;
      case '/':
      if (this.tempNum === 0) {
        this.tempNum = parseFloat(this.exportNum) ;
      }
        this.tempNum = this.tempNum / parseFloat(this.exportNum) ;
        break;
      case '*':
        if (this.tempNum === 0) {
          this.tempNum = 1 ;
        }
        this.tempNum = this.tempNum * parseFloat(this.exportNum);
        break;
    }
      this.exportNum = this.tempNum.toString();
      // this.sendNum.emit(this.exportNum);
  }
  // total
  total() {
    if (this.editing === false) {
      this.countNum();
      this.tempNum = 0;
      this.editing = true;
    }
  }
}
