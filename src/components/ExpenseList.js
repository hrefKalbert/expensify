import React from 'react'
import ExpenseListItem from './ExpenseListItem'
import { connect } from 'react-redux'
import {getVisibleExpenses} from '../selectors/expenses'

export const ExpenseList = (props) => 
  <div>
    {
      props.expenses.length === 0 ? 
        <p>No items in the list</p> :
      props.expenses.map(cur => 
          <ExpenseListItem 
          key={cur.id}
          {...cur}
           />
           )

    }
  </div>

  const mapStateToProps = (state) => ({
    expenses: getVisibleExpenses(state.expenses, state.filters)
  
  })



  export default connect(mapStateToProps)(ExpenseList)
  