import React from "react";
import { useSelector } from "../react-redux-hooks";
import { Link } from "react-router-dom";
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
<span></span>
  return (
    <div className="page-header">
      <div className="content-container">
        {eCount <= 1 && (
          <h2 className="page-header__title">
            Viewing <span>{eCount}</span> expense with a total of{" "}
            <span>{numeral(eTotal / 100).format("$0,0.00")}</span>
          </h2>
        )}
        {eCount >= 2 ? (
          <h2 className="page-header__title">
            Viewing <span>{eCount}</span> expenses with a total of{" "}
            <span>{numeral(eTotal / 100).format("$0,0.00")}</span>
          </h2>
        ) : (
          <></>
        )}
        <div className="page-header__actions">
          <Link className="button" to={"/create"}>Add Expense</Link>
        </div>
      </div>
    </div>
  );
};

export default ExpensesSummary;
