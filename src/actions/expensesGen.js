import database from "../firebase/firebase";

// Get DB
const db = database.getDatabase();

// Add Expense
export const addExpense = (expense) => {
  return {
    type: "ADD_EXPENSE",
    expense,
  };
};

export const startAddExpense = (expenseData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const {
      description = "",
      amount = 0,
      note = "",
      createdAt = 0,
    } = expenseData;
    const expense = { description, note, amount, createdAt };
    return database
      .push(database.ref(db, `users/${uid}/expenses`), expense)
      .then((ref) => {
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
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database
      .get(database.ref(db, `users/${uid}/expenses`))
      .then((snapshot) => {
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
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database
      .update(database.ref(db, `users/${uid}/expenses/${id}`), updates)
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
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database
      .remove(database.ref(db, `users/${uid}/expenses/${id}`))
      .then(() => {
        dispatch(removeExpense({ id }));
      });
  };
};
