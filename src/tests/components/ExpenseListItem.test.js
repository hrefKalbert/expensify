import React from 'react'
import ExpenseListItems from '../../components/ExpenseListItem'
import {shallow} from 'enzyme'
import expenses from '../fixtures/expenses'

test('should Render ExpenseListItem with fixture data',() => {
  const wrapper = shallow(<ExpenseListItems {...expenses[0]}/>)
  expect(wrapper).toMatchSnapshot()
  // console.log('Check the data:', expenses)
})