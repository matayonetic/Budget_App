import React, { useState } from "react";
import { useSelector, useDispatch } from "../react-redux-hooks";
import { DateRangePicker } from "react-dates";
import "react-dates/initialize";
import {
  setTextFilter,
  sortByAmount,
  sortByDate,
  setStartDate,
  setEndDate,
} from "../actions/filtersGen";

const ExpenseListFilter = () => {
  //
  // Hooks
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filters);

  // State
  const [calendarFocused, setFocus] = useState(null);

  // Reusable Dispatch
  const set_text_filter_fn = (e) => {
    dispatch(setTextFilter(e.target.value));
  };

  const sort_by_date_fn = () => {
    dispatch(sortByDate());
  };

  const sort_by_amount_fn = () => {
    dispatch(sortByAmount());
  };

  // On Dates Change
  const onDatesChange = ({ startDate, endDate }) => {
    dispatch(setStartDate(startDate));
    dispatch(setEndDate(endDate));
  };

  // On Focus Change
  const onFocusChange = (calendarFocused) => {
    setFocus(calendarFocused);
  };

  return (
    <div>
      <br />
      Filter: &nbsp;
      <input
        type="text"
        value={filters.text}
        onChange={(e) => {
          set_text_filter_fn(e);
        }}
      />
      &nbsp; Sort by: &nbsp;
      <select
        value={filters.sortBy}
        onChange={(e) => {
          if (e.target.value === "date") {
            sort_by_date_fn();
          } else if (e.target.value === "amount") {
            sort_by_amount_fn();
          }
        }}
      >
        <option value="date">Date</option>
        <option value="amount">Amount</option>
      </select>
      <br />
      <br />
      Date Range: &nbsp;
      <DateRangePicker
        startDate={filters.startDate}
        endDate={filters.endDate}
        onDatesChange={onDatesChange}
        focusedInput={calendarFocused}
        onFocusChange={onFocusChange}
        numberOfMonths={1}
        isOutsideRange={() => false}
        showClearDates={true}
      />
    </div>
  );
};

export default ExpenseListFilter;
