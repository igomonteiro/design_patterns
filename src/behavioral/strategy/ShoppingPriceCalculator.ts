import PriceCalculator from './PriceCalculator';

export default class ShoppingPriceCalculator implements PriceCalculator {
  calculate(parkedHours: number): number {
    return parkedHours * 10;
  }
}
