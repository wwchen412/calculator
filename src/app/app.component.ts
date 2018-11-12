import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  // 顯示的數字
  exportNum = '0';
  // 暫存的數字
  tempNum = 0;
  editing = false;
  operator = '';
  constructor() {
}

  // 輸入數字
  doNum(number) {
    // 如果輸入時數字是0
    if (this.exportNum === '0') {
      this.exportNum = number;
    } else if (this.editing === true) {
        // 如果按了＋號並且輸入數字 取代掉目前的值並且記錄
          this.exportNum = '';
          this.exportNum = number + '';
          this.editing = false;
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
  calculate(oprbtn) {
    this.operator = oprbtn;
    if ( this.editing === false) {
      // this.countNum();
      this.editing = true;
    }
    this.tempNum = parseFloat(this.exportNum);
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
