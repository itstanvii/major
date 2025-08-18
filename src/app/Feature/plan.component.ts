import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-plan-card',
  templateUrl: './plan.component.html',
})
export class PlanComponent {
  @Input() plan: any;
}
