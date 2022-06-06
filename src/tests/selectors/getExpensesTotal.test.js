import expenses from "../fixtures/expenses";
import getExpensesTotal from "../../selectors/getExpensesTotal"

// No Expenses
test("Should return 0 if there are no expenses", () => {
  const result = getExpensesTotal([]);
  expect(result).toBe(0);
});

// Single Expense
test("Should correctly add up a single expense", () => {
  const result = getExpensesTotal([expenses[0]]);
  expect(result).toBe(1);
});

// Multiple Expenses
test("Should add up all expenses correctly", () => {
  const result = getExpensesTotal(expenses);
  expect(result).toBe(6);
});
