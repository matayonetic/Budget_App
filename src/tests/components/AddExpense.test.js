import React from "react";
import { shallow } from "enzyme";
import * as ReactReduxHooks from "../../react-redux-hooks";
import { AddExpense } from "../../components/AddExpense";
import expenses from "../fixtures/expenses";

// Mock Navigation
const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => {
  return {
    useNavigate: () => mockNavigate,
  };
});

let mockDispatch, wrapper;

// Mock Dispatch
beforeEach(() => {
  mockDispatch = jest.fn();
  jest.spyOn(ReactReduxHooks, "useDispatch").mockReturnValue(mockDispatch);
});

// Render Page
test("Should render add expense page", () => {
  wrapper = shallow(<AddExpense />);
  expect(wrapper).toMatchSnapshot();
});

// Testing addExpense Function
test("Should handle add_expense", () => {
  wrapper = shallow(<AddExpense />);
  wrapper.find("ExpenseForm").prop("formData")(expenses[0]);
  expect(mockNavigate).toHaveBeenLastCalledWith("/");  
});

