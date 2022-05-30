import expenses from "../fixtures/expenses";
import {
  addExpense,
  editExpense,
  removeExpense,
} from "../../actions/expensesGen";

// Add Expense
test("Should setup add expense action object", () => {
  const action = addExpense(expenses[0]);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      ...expenses[0],
      id: expect.any(String),
    },
  });
});

// Add Default Expense
test("Should setup action object for default expense", () => {
  const exp = {
    description: "",
    amount: 0,
    note: "",
    createdAt: 0,
  };
  const action = addExpense(exp);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      id: expect.any(String),
      ...exp,
    },
  });
});

// Edit Expense
test("Should setup action object for edit expense", () => {
  const action = editExpense("abc123", { description: "Updated Note" });
  expect(action).toEqual({
    type: "EDIT_EXPENSE",
    id: expect.any(String),
    updates: {
      description: "Updated Note",
    },
  });
});

// Remove Expense
test("Should setup remove expense action object", () => {
  const action = removeExpense({ id: "abc123" });
  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    id: "abc123",
  });
});
