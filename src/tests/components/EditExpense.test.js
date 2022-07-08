import React from "react";
import EditExpense from "../../components/EditExpense";
import { shallow } from "enzyme";
import * as ReactReduxHooks from "../../react-redux-hooks";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import expenses from "../fixtures/expenses";

// Mock Nav & Params
const mockNavigate = jest.fn();
const mockParams = jest.fn();
jest.mock("react-router-dom", () => {
  return {
    useNavigate: () => mockNavigate,
    useParams: () => mockParams
  };
});

let store, wrapper, mockDispatch;

// Before each test
beforeEach(() => {
  //
  // Mock Store
  store = configureStore([thunk])(expenses[0]);

  // Mock Selector
  jest
    .spyOn(ReactReduxHooks, "useSelector")
    .mockImplementation(() => store.getState());

  // Mock Dispatch
  mockDispatch = jest.fn();
  jest.spyOn(ReactReduxHooks, "useDispatch").mockReturnValue(mockDispatch);
  // .mockImplementation(() => store.dispatch);
});

// Test Snapshot
test("Should render editExpense page", () => {
  wrapper = shallow(<EditExpense />);
  expect(wrapper).toMatchSnapshot();
});

// Testing formData prop
test("Should handle editMyExpense", () => {
  wrapper = shallow(<EditExpense />);
  wrapper.find("ExpenseForm").prop("formData")(expenses[0]);
  expect(mockNavigate).toHaveBeenLastCalledWith("/");  
});

// Testing removeExpense Handler
test("Should handle removeExpense", () => {
  wrapper = shallow(<EditExpense />);
  wrapper.find("button").simulate("click");
  expect(mockNavigate).toHaveBeenLastCalledWith("/");  
});
