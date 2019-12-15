import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {MathService} from '../math.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  XValue = '2';
  YValue = '2';
  Results: string;

  constructor(private math: MathService) { }

  onAddClick() {
    this.math.add(this.XValue, this.YValue).then(r => this.Results = `${this.XValue} + ${this.YValue} = ${r}`);
  }

  onSubClick() {
    this.math.subtract(this.XValue, this.YValue).then(r => this.Results = `${this.XValue} - ${this.YValue} = ${r}`);
  }

  onMultClick() {
    this.math.multiply(this.XValue, this.YValue).then(r => this.Results = `${this.XValue} * ${this.YValue} = ${r}`);
  }

  onDivClick() {
    this.math.divide(this.XValue, this.YValue).then(r => this.Results = `${this.XValue} / ${this.YValue} = ${r}`);
  }

  onPowClick() {
    this.math.power(this.XValue, this.YValue).then(r => this.Results = `${this.XValue} ^ ${this.YValue} = ${r}`);
  }

}
