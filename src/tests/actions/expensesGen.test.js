import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import expenses from "../fixtures/expenses";
import {
  startAddExpense,
  addExpense,
  editExpense,
  removeExpense,
} from "../../actions/expensesGen";
import database from "../../firebase/firebase";

// Get DB
const db = database.getDatabase();

// Ref
const Ref = database.ref(db, `expenses`);

// Mock Store
const store = configureStore([thunk])({});

beforeEach((done) => {
  const expenseData = {};
  expenses.forEach(({ id, description, amount, note, createdAt }) => {
    expenseData[id] = { description, amount, note, createdAt };
  });
  database.set(Ref, expenseData).then(() => done());
});

// Add Default Expense
test("Should add expense with defaults to database store", (done) => {
  const expenseDefaults = {
    description: "",
    amount: 0,
    note: "",
    createdAt: 0,
  };
  store
    .dispatch(startAddExpense({}))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: "ADD_EXPENSE",
        expense: {
          id: expect.any(String),
          ...expenseDefaults,
        },
      });
      return database.get(
        database.ref(db, `expenses/${actions[0].expense.id}`)
      );
    })
    .then((snapshot) => {
      expect(snapshot.val()).toEqual(expenseDefaults);
      done();
    });
});

// Add Expense to Database Store
test("Should add expense to database store", (done) => {
  const expenseData = {
    description: "Lock",
    amount: 8,
    note: "Main door",
    createdAt: 1000,
  };
  store
    .dispatch(startAddExpense(expenseData))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: "ADD_EXPENSE",
        expense: {
          id: expect.any(String),
          ...expenseData,
        },
      });
      return database.get(
        database.ref(db, `expenses/${actions[0].expense.id}`)
      );
    })
    .then((snapshot) => {
      expect(snapshot.val()).toEqual(expenseData);
      done();
    });
});

// Add Expense
test("Should setup add expense action object", () => {
  const action = addExpense(expenses[0]);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: expenses[0],
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
