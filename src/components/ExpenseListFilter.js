import React from "react";
import { connect } from 'react-redux';
import "react-dates/initialize";
import { DateRangePicker } from "react-dates";
import {
  setTextFilter,
  sortByAmount,
  sortByDate,
  setStartDate,
  setEndDate,
} from "../actions/filtersGen";

export class ExpenseListFilter extends React.Component {
  //
  // State
  state = {
    calendarFocused: null,
  };

  // Date Change
  onDatesChange = ({ startDate, endDate }) => {
    this.props.setStartDate(startDate);
    this.props.setEndDate(endDate);
  };

  // Focus Change
  onFocusChange = (calendarFocused) => {
    this.setState(() => ({ calendarFocused }));
  };

  // Text Change
  onTextChange = (e) => {
    this.props.setTextFilter(e.target.value);
  };

  // Sort Change
  onSortChange = (e) => {
    if (e.target.value === "date") {
      this.props.sortByDate();
    } else if (e.target.value === "amount") {
      this.props.sortByAmount();
    }
  };

  render() {
    return (
      <div>
        <br />
        Filter: &nbsp;
        <input
          type="text"
          value={this.props.filters.text}
          onChange={this.onTextChange}
        />
        &nbsp; Sort by: &nbsp;
        <select value={this.props.filters.sortBy} onChange={this.onSortChange}>
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>
        <br />
        <br />
        Date Range: &nbsp;
        <DateRangePicker
          startDate={this.props.filters.startDate}
          startDateId="MyStartDatePickerId"
          endDate={this.props.filters.endDate}
          endDateId="MyEndDatePickerId"
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.calendarFocused}
          onFocusChange={this.onFocusChange}
          showClearDates={true}
          numberOfMonths={1}
          isOutsideRange={() => false}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  filters: state.filters,
});

const mapDispatchToProps = (dispatch) => ({
  setTextFilter: (text) => dispatch(setTextFilter(text)),
  sortByDate: () => dispatch(sortByDate()),
  sortByAmount: () => dispatch(sortByAmount()),
  setStartDate: (startDate) => dispatch(setStartDate(startDate)),
  setEndDate: (endDate) => dispatch(setEndDate(endDate)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilter);
