import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import expenses from "../fixtures/expenses";
import expensesReducer from "../../reducers/expensesReducer";
import {
  addExpense,
  startAddExpense,
  setExpenses,
  startSetExpenses,
  editExpense,
  startEditExpense,
  removeExpense,
  startRemoveExpense,
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

// Add Expense Action Object
test("Should setup ADD_EXPENSE action object", () => {
  const action = addExpense(expenses[0]);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: expenses[0],
  });
});

// Add Expense
test("Should add an expense to database and store", (done) => {
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

// Add Default Expense
test("Should add expense to database and store with defaults", (done) => {
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

// Set Expenses
test("Should set expenses", () => {
  const action = { type: "SET_EXPENSE", expenses: expenses[1] };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[1]]);
});

test("Should setup SET_EXPENSE action object with data", () => {
  const action = setExpenses(expenses);
  expect(action).toEqual({
    type: "SET_EXPENSE",
    expenses,
  });
});

// Fetch Expense
test("Should fetch expenses from firebase", (done) => {
  store.dispatch(startSetExpenses()).then(() => {
    const action = store.getActions();
    expect(
      action[0].toEqual({
        type: "SET_EXPENSE",
        expenses,
      })
    );
    done();
  });
});

// Edit Expense
test("Should setup EDIT_EXPENSE action object", () => {
  const action = editExpense("abc123", { description: "Updated Note" });
  expect(action).toEqual({
    type: "EDIT_EXPENSE",
    id: expect.any(String),
    updates: {
      description: "Updated Note",
    },
  });
});

test("Should edit an expense from firebase", (done) => {
  const id = expenses[0].id;
  const updates = { description: "Test Update" };
  store
    .dispatch(startEditExpense(id, updates))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: "EDIT_EXPENSE",
        id,
        updates,
      });
      return database.get(database.ref(db, `expenses/${id}`));
    })
    .then((snapshot) => {
      expect(snapshot.val().description).toBe("Test Update");
      done();
    });
});

// Remove Expense
test("Should setup REMOVE_EXPENSE action object", () => {
  const action = removeExpense({ id: "abc123" });
  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    id: "abc123",
  });
});

test("Should remove an expense from firebase", (done) => {
  const id = expenses[0].id;
  store
    .dispatch(startRemoveExpense({ id }))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: "REMOVE_EXPENSE",
        id,
      });
      return database.get(database.ref(db, `expenses/${id}`));
    })
    .then((snapshot) => {
      expect(snapshot.val()).toBeFalsy();
      done();
    });
});
