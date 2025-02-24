// Use the below code as a help
// e.g., integrate it into a service or component
// You may need to tweak it, depending on where and how you use it

import { Injectable } from '@angular/core';
import { annualDataElement, inputData } from '../app.model';

@Injectable({ providedIn: 'root' })
export class calculateInvestmentService {
  annualData: annualDataElement[] = [];

  // Takes inputData and pushes results for each year of duration into annualData.
  calculateInvestmentResults(input: inputData) {
    let investmentValue = input.initialInvestment;

    for (let i = 0; i < input.duration; i++) {
      const year = i + 1;
      const interestEarnedInYear =
        investmentValue * (input.expectedReturn / 100);
      investmentValue += interestEarnedInYear + input.annualInvestment;
      const totalInterest =
        investmentValue -
        input.annualInvestment * year -
        input.initialInvestment;
      this.annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: input.annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested:
          input.initialInvestment + input.annualInvestment * year,
      });
    }
    console.log(this.annualData);
  }
  getInvestmentResults() {
    return this.annualData;
  }
}
