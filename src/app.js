import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import 'react-dates/lib/css/_datepicker.css'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import {addExpense} from './actions/expenses'
import {setTextFilter} from './actions/filters'
import {getVisibleExpenses} from './selectors/expenses'

const theRoot = document.querySelector('#app')

const store = configureStore()
// store.subscribe( () => console.log('subscriptionupdate:',getVisibleExpenses(store.getState().expenses, store.getState().filters)))

// store.dispatch(addExpense({description: 'Water bill', amount: 4500}))
// store.dispatch(addExpense({description: 'Gas Bill', createdAt: 1000}))

// store.dispatch(addExpense({description: 'rent', amount: 109500}))




// store.dispatch(setTextFilter('bill'))

console.log(store.getState())


// console.log(store.getState())

const jsx = 
  <Provider store={store}>
     <AppRouter />
  </Provider>

ReactDOM.render(jsx, theRoot)

