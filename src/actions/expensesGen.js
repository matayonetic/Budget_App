import database from "../firebase/firebase";

// Get DB
const db = database.getDatabase();

// Ref
const Ref = database.ref(db, `expenses`);

// Add Expense
export const addExpense = (expense) => {
  return {
    type: "ADD_EXPENSE",
    expense,
  };
};

export const startAddExpense = (expenseData = {}) => {
  return (dispatch) => {
    const {
      description = "",
      amount = 0,
      note = "",
      createdAt = 0,
    } = expenseData;
    const expense = { description, note, amount, createdAt };
    return database.push(Ref, expense).then((ref) => {
      dispatch(
        addExpense({
          id: ref.key,
          ...expense,
        })
      );
    });
  };
};

// Set Expenses
export const setExpenses = (expenses) => ({
  type: "SET_EXPENSE",
  expenses,
});

export const startSetExpenses = () => {
  return (dispatch) => {
    return database.get(Ref).then((snapshot) => {
      const expenses = [];
      snapshot.forEach((childSnapshot) => {
        expenses.push({
          id: childSnapshot.key,
          ...childSnapshot.val(),
        });
      });
      dispatch(setExpenses(expenses));
    });
  };
};

// Edit Expense
export const editExpense = (id, updates) => {
  return {
    type: "EDIT_EXPENSE",
    id,
    updates,
  };
};

export const startEditExpense = (id, updates) => {  
  return (dispatch) => {
    return database
      .update(database.ref(db, `expenses/${id}`), updates)
      .then(() => {
        dispatch(editExpense(id, updates));
      });
  };
};

// Remove Expense
export const removeExpense = ({ id } = {}) => {
  return {
    type: "REMOVE_EXPENSE",
    id,
  };
};

export const startRemoveExpense = ({ id } = {}) => {
  return (dispatch) => {
    return database.remove(database.ref(db, `expenses/${id}`)).then(() => {
      dispatch(removeExpense({ id }));
    });
  };
};
