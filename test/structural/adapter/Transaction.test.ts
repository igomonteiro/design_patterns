import PaypalTransaction from '../../../src/structural/adapter/PaypalTransaction';
import PaypalTransactionAdapter from '../../../src/structural/adapter/PaypalTrnsactionAdapter';
import StripeTransaction from '../../../src/structural/adapter/StripeTransaction';
import StripeTransactionAdapter from '../../../src/structural/adapter/StripeTransactionAdapter';

// Intenção do adapter: converter a interface de uma classe em outra interface esperada pelos clientes. O adapter permite que classes com interfaces incompatíveis trabalhem em conjunto
test('Deve criar uma transação do Stripe', () => {
  const stripeTransaction = new StripeTransaction('AHN786AB8', 1000, 2);
  expect(stripeTransaction.code).toBe('AHN786AB8');
});

test('Deve criar uma transação do Paypal', () => {
  const paypalTransaction = new PaypalTransaction(789789789, 1000, 'S');
  expect(paypalTransaction.id).toBe(789789789);
});

test('Deve criar uma transação a partir do Stripe', () => {
  const stripeTransaction = new StripeTransaction('AHN786AB8', 1000, 2);
  const transaction = new StripeTransactionAdapter(stripeTransaction);
  expect(transaction.trackNumber).toBe('AHN786AB8');
  expect(transaction.amount).toBe(1000);
  expect(transaction.status).toBe('paid');
});

test('Deve criar uma transação a partir do Paypal', () => {
  const paypalTransaction = new PaypalTransaction(789789789, 1000, 'S');
  const transaction = new PaypalTransactionAdapter(paypalTransaction);
  expect(transaction.trackNumber).toBe('789789789');
  expect(transaction.amount).toBe(1000);
  expect(transaction.status).toBe('paid');
});
