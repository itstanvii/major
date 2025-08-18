import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'BMI',
  templateUrl: 'bmi.component.html',
})
export class BmiCalculatorComponent {
  age: number | null = null;
  gender: string = '';
  height: number | null = null;
  weight: number | null = null;
  bmi: number | null = null;
  category: string = '';

  constructor() {}

  calculateBMI(): void {
    if (this.height && this.weight) {
      const heightInMeters = this.height / 100;
      this.bmi = +(this.weight / (heightInMeters * heightInMeters)).toFixed(2);
      this.category = this.getBMICategory(this.bmi);
    } else {
      this.bmi = null;
      this.category = '';
    }
  }

  getBMICategory(bmi: number): string {
    if (bmi < 18.5) {
      return 'Underweight';
    } else if (bmi >= 18.5 && bmi < 24.9) {
      return 'Normal weight';
    } else if (bmi >= 25 && bmi < 29.9) {
      return 'Overweight';
    } else {
      return 'Obese';
    }
  }
  reset(): void {
    this.age = null;
    this.gender = '';
    this.height = null;
    this.weight = null;
    this.bmi = null;
    this.category = '';
  }
}
