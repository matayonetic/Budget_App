import React from "react";
import { shallow } from "enzyme";
import ExpenseForm from "../../components/ExpenseForm";
import expenses from "../fixtures/expenses";
import { SingleDatePicker } from "react-dates";
import moment from "moment";

// Snapshot Test
test("Should render expense form correctly", () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot();
});

// Snapshot Test with Data
test("Should render expense form with props", () => {
  const wrapper = shallow(<ExpenseForm expense={expenses[0]} />);
  expect(wrapper).toMatchSnapshot();
});

// Test Form Submission
test("Should submit form without data", () => {
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find("form").simulate("submit", {
    preventDefault: () => {},
  });
  expect(wrapper.state("error").length).toBeGreaterThan(0);
});

// Simulate Events and Check State
test("Should set desciption", () => {
  const wrapper = shallow(<ExpenseForm />);
  wrapper
    .find("input")
    .at(0)
    .simulate("change", {
      target: { value: "some text" },
    });
  expect(wrapper.state("description")).toBe("some text");
});

test("Should set amount for valid input", () => {
  const wrapper = shallow(<ExpenseForm />);
  wrapper
    .find("input")
    .at(1)
    .simulate("change", {
      target: { value: "23.50" },
    });
  expect(wrapper.state("amount")).toBe("23.50");
});

test("Should not set amount for invalid input", () => {
  const wrapper = shallow(<ExpenseForm />);
  wrapper
    .find("input")
    .at(1)
    .simulate("change", {
      target: { value: "23.555" },
    });
  expect(wrapper.state("amount")).toBe("");
});

test("Should set note", () => {
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find("textarea").simulate("change", {
    target: { value: "some note" },
  });
  expect(wrapper.state("note")).toBe("some note");
});

// Use Mock Functions (Spies)
test("Should call formData prop for valid form submission", () => {
  const formDataSpy = jest.fn();
  const wrapper = shallow(
    <ExpenseForm expense={expenses[0]} formData={formDataSpy} />
  );
  wrapper.find("form").simulate("submit", {
    preventDefault: () => {},
  });
  expect(wrapper.state("error")).toBe("");
  expect(formDataSpy).toHaveBeenLastCalledWith({
    description: expenses[0].description,
    amount: expenses[0].amount,
    note: expenses[0].note,
    createdAt: expenses[0].createdAt,
  });
});

// Trigger Events on Child Component
test("Should set date on date change", () => {
  const now = moment();
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find(SingleDatePicker).prop("onDateChange")(now);
  expect(wrapper.state("createdAt")).toEqual(now);
});

test("Should set calendar focus onFocusChange", ()=>{
    const focused = true
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find("withStyles(SingleDatePicker)").prop("onFocusChange")({focused});
    expect(wrapper.state("calendarFocused")).toBe(focused)
})
