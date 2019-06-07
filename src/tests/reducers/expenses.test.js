import expensesReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses'


test('should set default state to empty array', () => {
  const state = expensesReducer(undefined, { type: '@@INIT'})
  expect(state).toEqual([])
})

test('should remove expense by id', () => {
  const action ={
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  }

  const state = expensesReducer(expenses, action)
  const removed = expenses.splice(1,1)

  expect(state).toEqual(expenses)
}) 


test('should not remove expense if if not found', () => {
  const action ={
    type: 'REMOVE_EXPENSE',
    id: '-1'
  }

  const state = expensesReducer(expenses, action)
  

  expect(state).toEqual(expenses)
}) 

test('should add expense', () => {
  const exp = {
    id:'4',
    description: 'Food',
    note: '',
    amount: 2000,
    createdAt: 5000
  }
  
  const action = {
    type: 'ADD_EXPENSE',
    expense: exp
   }
    const state = expensesReducer(expenses, action)
  
    expect(state).toEqual([...expenses, exp])
})

test('should edit expense', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[0].id,
    updates: {
      description: 'Edited Gum',
      note: 'this one is edited'
    }

  }
  const state = expensesReducer(expenses, action)
  
  expect(state[0].description).toBe('Edited Gum')
  expect(state[0].note).toBe('this one is edited')

  

})

test('should not edit expense if id not found', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: 4,
    updates: {
      description: 'Edited Gum',
      note: 'this one is edited'
    }

  }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual(expenses)
  

  

})
