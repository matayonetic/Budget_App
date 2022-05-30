import {
  setEndDate,
  setStartDate,
  setTextFilter,
  sortByAmount,
  sortByDate,
} from "../../actions/filtersGen";
import moment from "moment";

// Start Date
test("Should setup action object for start date", () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: "SET_START_DATE",
    startDate: moment(0),
  });
});

// End Date
test("Should set up action object for end date", () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: "SET_END_DATE",
    endDate: moment(0),
  });
});

// Set Text Filter
test("Should set up text filter action object", () => {
  const text = "some text";
  const action = setTextFilter(text);
  expect(action).toEqual({
    type: "SET_TEXT_FILTER",
    text,
  });
});

// Set Default Text Filter
test("Should setup default text filter action object", () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: "SET_TEXT_FILTER",
    text: "",
  });
});

// Sort By Amount
test("Should setup sort_by_amount action object", () => {
  const action = sortByAmount();
  expect(action).toEqual({
    type: "SORT_BY_AMOUNT",
  });
});

// Sort By Date
test("Should setup sort_by_date action object", () => {
  const action = sortByDate();
  expect(action).toEqual({
    type: "SORT_BY_DATE",
  });
});
