import { v4 as uuidv4 } from "uuid";

// Add Expense
export const addExpense = ({
  description = "",
  amount = 0,
  note = "",
  createdAt = 0,
} = {}) => {
  return {
    type: "ADD_EXPENSE",
    expense: {
      id: uuidv4(),
      description,
      amount,
      note,
      createdAt,
    },
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
