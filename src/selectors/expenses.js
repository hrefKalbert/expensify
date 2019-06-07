import moment from 'moment'

export const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses.filter((cur)=> {
    const momentCreatedAt = moment(cur.createdAt)
    const startDateMatch = startDate ? startDate.isSameOrBefore(momentCreatedAt, 'day') : true
    const endDateMatch = endDate ? endDate.isSameOrAfter(momentCreatedAt, 'day') : true
    const textMatch = cur.description.toLowerCase().includes(text.toLowerCase())
  
    return startDateMatch && endDateMatch && textMatch
  }).sort((a,b) => {
    if(sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1  : -1
    } else if(sortBy === 'amount'){
      return a.amount < b.amount ? 1 : -1
    }
  })
}