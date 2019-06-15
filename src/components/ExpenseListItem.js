import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'
import numeral from 'numeral'

// const ExpenseListItems = (props) => 
//   <ol>
//     {props.expenses.map(cur => (
//       <div key={cur.id}>
//         <li><h3>{cur.description}</h3></li>
//         <li>Amount: {cur.amount}</li>
//         <li>Created at: {cur.createdAt}</li>
//       </div>
//       ) )}
//   </ol>

//   const mapStateToProps = (state) => ({
//     expenses: state.expenses,
//     filters: state.filters
//   }) 

//   export default connect(mapStateToProps)(ExpenseListItems)

const ExpenseListItems = ({ description, amount, createdAt, id }) =>
  <div>
    <Link to={`/edit/${id}`}>
      <h1>{description}</h1>
    </Link>
    <p>Amount: {numeral(amount /100).format('$0, 0.00')}</p>
    <p>Created at: {moment(createdAt).format('MMMM Do, YYYY')}</p>

  </div>

export default ExpenseListItems