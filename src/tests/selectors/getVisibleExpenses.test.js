import getVisibleExpenses from "../../selectors/getVisibleExpenses";
import expenses from "../fixtures/expenses";
import moment from "moment";

// Text Value
test("Should filter by text value", () => {
  const filters = {
    text: "Food",
    sortBy: "date",
    startDate: undefined,
    endDate: undefined,
  };
  const result = getVisibleExpenses(expenses, filters);
  expect(result).toEqual([expenses[0]]);
});

// Sort by Date
test("Should sort by date", () => {
  const filters = {
    text: "",
    sortBy: "date",
    startDate: undefined,
    endDate: undefined,
  };
  const result = getVisibleExpenses(expenses, filters);
  expect(result).toEqual([expenses[2], expenses[1], expenses[0]]);
});

// Sort by Amount
test("Should sort by amount", () => {
  const filters = {
    text: "",
    sortBy: "amount",
    startDate: undefined,
    endDate: undefined,
  };
  const result = getVisibleExpenses(expenses, filters);
  expect(result).toEqual([expenses[2], expenses[1], expenses[0]]);
});

// Filter by startDate
test("Should filter by start date", () => {
  const filters = {
    text: "",
    sortBy: "date",
    startDate: moment(0),
    endDate: undefined,
  };
  const result = getVisibleExpenses(expenses, filters);
  expect(result).toEqual([expenses[2], expenses[1]]);
});

// Filter by endDate
test("Should filter by end date", () => {
  const filters = {
    text: "",
    sortBy: "date",
    startDate: undefined,
    endDate: moment(0),
  };
  const result = getVisibleExpenses(expenses, filters);
  expect(result).toEqual([expenses[1], expenses[0]]);
});
