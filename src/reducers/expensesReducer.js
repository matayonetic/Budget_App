// Default Expenses
const defaultExpense = [];

// Expenses Reducer
const expensesReducer = (state = defaultExpense, action) => {
  switch (action.type) {
    //
    case "ADD_EXPENSE":
      return [...state, action.expense];

    case "EDIT_EXPENSE":
      return state.map((expense) => {
        if (expense.id === action.id) {
          return { ...expense, ...action.updates };
        } else {
          return expense;
        }
      });

    case "REMOVE_EXPENSE":
      return state.filter(({ id }) => id !== action.id);

    default:
      return state;
  }
};

export default expensesReducer;
