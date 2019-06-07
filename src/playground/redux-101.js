import { createStore } from 'redux'

// Action generators - functions that returns action objects.

const incrementCount = ({incrementBy = 1} = {}) => ({
    type: 'INCREMENT',
    incrementBy
})
  
const decrementCount = ({ decrementBy = 1} = {}) => ({
  type:'DECREMENT',
  decrementBy
})

const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      
      return {
        count: state.count + action.incrementBy
      }

    case 'DECREMENT':
      
      return {
        count: state.count - action.decrementBy
      }

    case 'SET':
      return {
        count: action.count
      }

    case 'RESET':
      return {
        count: 0
      }

    default:
      return state;

  }

}

const store = createStore(countReducer)

const resetCount = () => ({
  type: 'RESET',
  count: 0
})

const setCount = ({count = store.getState().count} = {}) => ({
  type: 'SET',
  count
})

const unsubscribe = store.subscribe(()=> console.log(store.getState())) 

// store.dispatch({
//   type: 'INCREMENT',
//   incrementBy: 5
// })

// store.dispatch({
//   type: 'INCREMENT'
// })

store.dispatch(incrementCount({incrementBy: 10}))

store.dispatch(incrementCount())

store.dispatch(resetCount())

store.dispatch(decrementCount())

store.dispatch(decrementCount({ decrementBy: 10}))

store.dispatch(setCount())



