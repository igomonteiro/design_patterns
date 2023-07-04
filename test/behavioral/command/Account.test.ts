import Account from '../../../src/behavioral/command/Account';
import CreditCommand from '../../../src/behavioral/command/CreditCommant';
import DebitCommand from '../../../src/behavioral/command/DebitCommant';

test('Deve criar uma conta', () => {
  const account = new Account();
  const balance = account.getBalance();
  expect(balance).toBe(0);
});

test('Deve creditar uma conta', () => {
  const account = new Account();
  account.credit(100);
  const balance = account.getBalance();
  expect(balance).toBe(100);
});

test('Deve debitar uma conta', () => {
  const account = new Account();
  account.credit(100);
  account.debit(50);
  const balance = account.getBalance();
  expect(balance).toBe(50);
});

test('Deve creditar uma conta usando um comando', () => {
  const account = new Account();
  const creditCommand = new CreditCommand(account, 100);
  creditCommand.execute();
  const balance = account.getBalance();
  expect(balance).toBe(100);
});

test('Deve debitar uma conta usando um comando', () => {
  const account = new Account();
  const creditCommand = new CreditCommand(account, 100);
  creditCommand.execute();
  const debitCommand = new DebitCommand(account, 50);
  debitCommand.execute();
  const balance = account.getBalance();
  expect(balance).toBe(50);
});
