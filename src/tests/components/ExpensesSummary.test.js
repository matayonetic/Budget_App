import React from "react";
import ExpensesSummary from "../../components/ExpensesSummary";
import { shallow } from "enzyme";

import expenses from "../fixtures/expenses";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import * as ReactReduxHooks from "../../react-redux-hooks";

// For One Expense
test("Render ExpenseSummary correctly for one expense", () => {
  const store = configureStore([thunk])([expenses[0]]);
  jest
    .spyOn(ReactReduxHooks, "useSelector")
    .mockImplementation(() => store.getState());
  const wrapper = shallow(<ExpensesSummary />);
  expect(wrapper).toMatchSnapshot();
});

// For multiple Expenses
test("Render ExpenseSummary correctly for multiple expenses", () => {
    const store = configureStore([thunk])(expenses);
    jest
      .spyOn(ReactReduxHooks, "useSelector")
      .mockImplementation(() => store.getState());
    const wrapper = shallow(<ExpensesSummary />);
    expect(wrapper).toMatchSnapshot();
  });
