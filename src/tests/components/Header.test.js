import React from "react";
import { shallow } from "enzyme";
import * as ReactReduxHooks from "../../react-redux-hooks";
import Header from "../../components/Header";

let mockDispatch, wrapper;

// Mock Dispatch
beforeEach(() => {
  mockDispatch = jest.fn();
  jest.spyOn(ReactReduxHooks, "useDispatch").mockReturnValue(mockDispatch);
});

// Render Header
test("Should render Header component correctly", () => {
  wrapper = shallow(<Header />);
  expect(wrapper).toMatchSnapshot();
});

// Testing beginLogout Handler
test("Should call beginLogout on button click", () => {  
  wrapper = shallow(<Header />);
  wrapper.find("button").simulate("click");
  expect(mockDispatch).toHaveBeenCalled();
});
