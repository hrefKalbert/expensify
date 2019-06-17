export default (expenses) => {
  if(expenses.length === 0 ) {
    return 0
  } else {
    return expenses.map( cur => cur.amount).reduce((sum, value) => sum + value, 0)
  }
}