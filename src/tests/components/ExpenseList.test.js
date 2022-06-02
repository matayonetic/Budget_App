import React from "react";
import { shallow } from "enzyme";

import expenses from "../fixtures/expenses";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import * as ReactReduxHooks from "../../react-redux-hooks";

import ExpenseList from "../../components/ExpenseList";

// Render Expense List
test("Should render expense list", () => {
  //
  let store = configureStore([thunk])(expenses);
  jest
    .spyOn(ReactReduxHooks, "useSelector")
    .mockImplementation(() => store.getState());
    
  const wrapper = shallow(<ExpenseList />);
  expect(wrapper).toMatchSnapshot();
});

// Affirm Empty Expense List
test("Should render an empty expense list", () => {
  let store = configureStore([thunk])([]);
  jest
    .spyOn(ReactReduxHooks, "useSelector")
    .mockImplementation(() => store.getState());
  const wrapper = shallow(<ExpenseList />);
  expect(wrapper.find("p").text()).toBe("No data found");
  expect(wrapper).toMatchSnapshot();
});
