import PriceCalculator from './PriceCalculator';

export default class BeachPriceCalculator implements PriceCalculator {
  calculate(parkedHours: number): number {
    return 20;
  }
}
