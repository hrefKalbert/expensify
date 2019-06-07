import React from 'react'
import { connect } from 'react-redux'
import ExpenseList from './ExpenseList';
import 'react-dates/initialize'
// import 'react-dates/lib/css/_datepicker.css' Moved this one to the app js file because of testing errors
import { DateRangePicker } from 'react-dates'
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters'

export class ExpenseListFilters extends React.Component {
  state = {
    calendarFocused: null
  }

  onDatesChange = ({ startDate, endDate }) => {
    this.props.setStartDate(startDate)
    this.props.setEndDate(endDate)
  }

  onFocusChange = (calendarFocused) => {
    this.setState(() => ({
      calendarFocused
    }))
  }

  onSortChange = (e) => {

    e.target.value === 'date' ? this.props.sortByDate() : this.props.sortByAmount()

  }

  onTextChange = (e) => this.props.setTextFilter(e.target.value)
  render() {
    return (
      <div>
        <input type="text" value={this.props.filters.text} onChange={this.onTextChange} />
        <select name="" id="" value={this.props.filters.sortBy} onChange={this.onSortChange}>
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>
        <DateRangePicker 
          startDate={this.props.filters.startDate}
          startDateId="uniqeStartDateId"
          endDate={this.props.filters.endDate}
          endDateId="uniqueEndDateId"
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.calendarFocused}
          onFocusChange={this.onFocusChange}
          numberOfMonths={1}
          isOutsideRange={()=> false}
          showClearDates={true}
        />
      </div>
    )
  }
}

const mapDispatchToProps = () => ({
  setTextFilter: text => dispatch(setTextFilter(text)),
  sortByDate: () => dispatch(sortByDate()),
  sortByAmount: ()=> dispatch(sortByAmount()),
  setStartDate: (startDate) => dispatch(setStartDate(startDate)),
  setEndDate: (endDate) => dispatch(setEndDate(endDate))
})


const mapStateToProps = (state) => ({
  filters: state.filters
})
export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters)