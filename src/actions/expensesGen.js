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

// Edit Expense
export const editExpense = (id, updates) => {
  return {
    type: "EDIT_EXPENSE",
    id,
    updates,
  };
};

// Remove Expense
export const removeExpense = ({ id } = {}) => {
  return {
    type: "REMOVE_EXPENSE",
    id,
  };
};
