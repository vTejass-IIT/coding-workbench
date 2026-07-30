// LC 2043 — Simple Bank System.
// Accounts are 1-indexed against `balance` (balance[0] is account 1's balance, etc).
// - withdraw(account, money): if account is valid and has sufficient balance, deduct and return true; else false.
// - deposit(account, money): if account is valid, add and return true; else false.
// - transfer(account1, account2, money): if both accounts are valid and account1 has sufficient
//   balance, move the money and return true; else false.
export class Bank {
  constructor(balance: number[]) {
    throw new Error("not implemented");
  }

  withdraw(account: number, money: number): boolean {
    throw new Error("not implemented");
  }

  deposit(account: number, money: number): boolean {
    throw new Error("not implemented");
  }

  transfer(account1: number, account2: number, money: number): boolean {
    throw new Error("not implemented");
  }
}
