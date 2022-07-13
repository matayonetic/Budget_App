import React from "react";
import { shallow } from "enzyme";
import * as ReactReduxHooks from "../../react-redux-hooks";
import Login from "../../components/Login";

let mockDispatch, wrapper;

// Mock Dispatch
beforeEach(() => {
  mockDispatch = jest.fn();
  jest.spyOn(ReactReduxHooks, "useDispatch").mockReturnValue(mockDispatch);
});

// Snapshot
test("Should render login page correctly", () => {
  const wrapper = shallow(<Login />);
  expect(wrapper).toMatchSnapshot();
});

// Testing beginLogin Handler
test("Should call beginLogin on button click", () => {
  const beginLogin = jest.fn();
  wrapper = shallow(<Login />);
  wrapper.find("button").simulate("click");
  expect(mockDispatch).toHaveBeenCalled();
});
