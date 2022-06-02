import React from "react";
import { shallow } from "enzyme";
import { ExpenseListItems } from "../../components/ExpenseListItems";
import expenses from "../fixtures/expenses";

// Render ExpenseListItems
test("Should render expense list items", () => {
  const expense = expenses[0];  
  const wrapper = shallow(<ExpenseListItems {...expense} />);
  expect(wrapper).toMatchSnapshot();
});
