// Expense Reducer

const expensesReducerDefaultState = []

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [
        ...state, action.expense
      ]
    case 'REMOVE_EXPENSE':
      return state.filter(({ id }) => id !== action.id)
    case 'EDIT_EXPENSE':
      return state.map(cur => {
        if (cur.id === action.id) {

          return {
            ...cur,
            ...action.updates

          }

        } else {
          return cur;
        }
      })
    default:
      return state
  }
}

export default expensesReducer