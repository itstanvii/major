import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StoreModule } from '../Store/Store.module';
import { AutoFocusDirective } from '../Shared/customDirective.component';

@Component({
  selector: 'BMI',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    StoreModule,
    AutoFocusDirective,
  ],
  templateUrl: 'bmi.component.html',
})
export class BmiCalculatorComponent {
  age: number | null = null;
  gender: string = '';
  height: number | null = null;
  weight: number | null = null;
  bmi: number | null = null;
  category: string = '';

  calculateBMI(): void {
    if (this.height && this.weight) {
      this.bmi = +(this.weight / (this.height * this.height)).toFixed(2);
      this.category = this.getBMICategory(this.bmi);
    } else {
      this.bmi = null;
      this.category = '';
    }
  }

  getBMICategory(bmi: number): string {
    if (bmi < 18.5) return 'Underweight';
    else if (bmi < 24.9) return 'Normal weight';
    else if (bmi < 29.9) return 'Overweight';
    else return 'Obese';
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
