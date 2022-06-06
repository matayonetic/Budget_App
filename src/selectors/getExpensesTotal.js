const getExpensesTotal = (expenses) => {  
  return expenses
    .map((expense) => expense.amount)
    .reduce((previousVal, currentVal) => previousVal + currentVal, 0);
};

export default getExpensesTotal;
