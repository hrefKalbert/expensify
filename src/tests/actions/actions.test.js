import { addExpense, editExpense, removeExpense } from '../../actions/expenses'


// test('should set up removeExpense action object', () => {
//   const action = removeExpense({id: '123abc'})

//   expect(action).toEqual({
//     type: 'REMOVE_EXPENSE',
//     id: '123abc'
//   })
// })

// test('should return baction object', () => {
//   const result = editExpense('123abc',{note: 'New note Value'.toLowerCase()})
//   expect(result).toEqual({type: 'EDIT_EXPENSE', updates: {note: 'New note value'.toLowerCase()}})
// })

test('should setup add expense action object with provided values', () => {
  const expenseData = {
    description: 'Rent',
    amount: 1095000,
    createdAt: 1000,
    note: 'This was last months rent'
  }
  const action = addExpense(expenseData)
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  })
}) 

test('should setup  add expense action object with default values', () => {
  const action = addExpense()
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...action.expense,
      id: expect.any(String)
    }
  })
})