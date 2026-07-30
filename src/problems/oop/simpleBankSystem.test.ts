import { describe, it, expect } from "vitest";
import { Bank } from "./simpleBankSystem";

describe("Bank", () => {
  it("handles deposit, withdraw, and transfer on valid accounts", () => {
    const bank = new Bank([10, 100, 20, 50, 30]);
    expect(bank.withdraw(3, 10)).toBe(true); // account3 = 10
    expect(bank.transfer(5, 1, 20)).toBe(true); // account5 = 10, account1 = 30
    expect(bank.deposit(5, 20)).toBe(true); // account5 = 30
    expect(bank.withdraw(4, 30)).toBe(true); // account4 = 20
    expect(bank.transfer(4, 1, 15)).toBe(true); // account4 = 5, account1 = 45
  });

  it("rejects operations on invalid account numbers", () => {
    const bank = new Bank([10, 100]);
    expect(bank.withdraw(3, 5)).toBe(false); // only 2 accounts exist
    expect(bank.deposit(0, 5)).toBe(false); // accounts are 1-indexed
    expect(bank.transfer(1, 3, 5)).toBe(false);
  });

  it("rejects withdrawals/transfers exceeding balance", () => {
    const bank = new Bank([10, 100]);
    expect(bank.withdraw(1, 20)).toBe(false);
    expect(bank.transfer(1, 2, 20)).toBe(false);
  });
});
