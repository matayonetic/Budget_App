import filtersReducer from "../../reducers/filtersReducer";
import moment from "moment";

// Test for Default Values
test("Should setup default filter values", () => {
  const result = filtersReducer(undefined, { type: "@@INIT" });
  expect(result).toEqual({
    text: "",
    sortBy: "date",
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month"),
  });
});

// Test case "SORT_BY_AMOUNT"
test("Should set sortBy to amount", () => {
  const state = filtersReducer(undefined, { type: "SORT_BY_AMOUNT" });
  expect(state.sortBy).toBe("amount");
});

// Test case "SORT_BY_DATE"
test("Should set sortBy to date", () => {
  const currentState = {
    text: "",
    sortBy: "amount",
    startDate: undefined,
    endDate: undefined,
  };
  const state = filtersReducer(currentState, { type: "SORT_BY_DATE" });
  expect(state.sortBy).toBe("date");
});

// Test case "SET_TEXT_FILTER"
test("Should set a text for the text filter", () => {
  const text = "trial text";
  const state = filtersReducer(undefined, {
    type: "SET_TEXT_FILTER",
    text,
  });
  expect(state.text).toBe(text);
});

// Test case "START_DATE_FILTER"
test("Should set a startDate Filter", () => {
  const startDate = 0;
  const action = {
    type: "SET_START_DATE",
    startDate,
  };
  const state = filtersReducer(undefined, action);
  expect(state.startDate).toBe(0);
});

// Test case "END_DATE_FILTER"
test("Should set an endDate Filter", () => {
  const endDate = 4;
  const action = {
    type: "SET_END_DATE",
    endDate,
  };
  const state = filtersReducer(undefined, action);
  expect(state.endDate).toBe(4);
});
