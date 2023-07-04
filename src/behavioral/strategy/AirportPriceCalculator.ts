import PriceCalculator from './PriceCalculator';

export default class AirportPriceCalculator implements PriceCalculator {
  calculate(parkedHours: number): number {
    let price = 20;
    const minHours = 3;
    const remainingHours = parkedHours - minHours;
    if (remainingHours <= 0) return price;
    price += remainingHours * 10;
    return price;
  }
}
