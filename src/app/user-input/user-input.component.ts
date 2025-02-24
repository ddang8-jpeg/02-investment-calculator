import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { calculateInvestmentService } from '../investment-results/investment-results.service';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  private calculateInvestmentService = inject(calculateInvestmentService);

  initialInvestments: number = 0;
  annualInvestments: number = 0;
  expectedReturns: number = 0;
  duration: number = 0;

  onSubmit() {
    this.calculateInvestmentService.calculateInvestmentResults({
      initialInvestment: this.initialInvestments,
      annualInvestment: this.annualInvestments,
      expectedReturn: this.expectedReturns,
      duration: this.duration,
    });
  }
}
