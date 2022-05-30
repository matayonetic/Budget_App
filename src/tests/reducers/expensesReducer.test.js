import expensesReducer from "../../reducers/expensesReducer";
import expenses from "../fixtures/expenses";

// Add Default Expense
test("Should setup default expense values", () => {
  const result = expensesReducer(undefined, { type: "@@INIT" });
  expect(result).toEqual([]);
});

// Add Expense
test("Should add an expense to the array", () => {
  const state = expensesReducer(undefined, {
    type: "ADD_EXPENSE",
    expense: expenses[0],
  });
  expect(state).toEqual([expenses[0]]);
});

// Edit Expense
test("Should edit an existing expense", () => {
  const action = {
    type: "EDIT_EXPENSE",
    id: expenses[1].id,
    updates: {
      description: "Updated",
    },
  };
  const state = expensesReducer(expenses, action);
  expect(state[1].description).toEqual("Updated");
});

// Test EDIT_EXPENSE by ID if id is Unavailable
test("Should not edit expense if the id is not found", () => {
  const action = {
    type: "EDIT_EXPENSE",
    id: 100,
    updates: {
      description: "Incorrect ID!",
    },
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

// Remove Expense
test("Should remove an expense from the array", () => {
  const state = expensesReducer(expenses, {
    type: "REMOVE_EXPENSE",
    id: expenses[2].id,
  });
  expect(state).toEqual([expenses[0], expenses[1]]);
});

// Test REMOVE_EXPENSE if ID is unavailable
test("Should not remove expense if id isnt found", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: 100,
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});
