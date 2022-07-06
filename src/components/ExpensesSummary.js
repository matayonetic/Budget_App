import React from "react";
import { useSelector } from "../react-redux-hooks";
import numeral from "numeral";
import getExpenseCount from "../selectors/getExpensesCount";
import getExpensesTotal from "../selectors/getExpensesTotal";
import getVisibleExpenses from "../selectors/getVisibleExpenses";

const ExpensesSummary = () => {
  const expenses = useSelector((state) =>
    getVisibleExpenses(state.expenses, state.filters)
  );
  const eCount = getExpenseCount(expenses);
  const eTotal = getExpensesTotal(expenses);

  return (
    <>      
      {eCount <= 1 && (
        <h2>
          Viewing {eCount} expense with a total of{" "}
          {numeral(eTotal / 100).format("$0,0.00")}
        </h2>
      )}
      {eCount >= 2 ? (
        <h2>
          Viewing {eCount} expense(s) with a total of{" "}
          {numeral(eTotal / 100).format("$0,0.00")}
        </h2>
      ) : (
        <></>
      )}
    </>
  );
};

export default ExpensesSummary;
