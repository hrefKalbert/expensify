import { setStartDate, setEndDate, setTextFilter, sortByDate, sortByAmount } from '../../actions/filters'
import moment from 'moment'

test('hould generate set start date action object', () => {
  const action = setStartDate(moment(0))
  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0)
  })
})

test('should generate set end date action object', () => {
  const action = setEndDate(moment(10000000))
  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(10000000)
  })
})

test('check set text filters',() => {
  const action = setTextFilter('test text')
  expect(action).toEqual({
    type:'SET_TEXT_FILTER',
    text: 'test text'
  })
})

test('check set text filters',() => 
  expect(setTextFilter()).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ''
  })
)

test('sort amount', () => expect(sortByAmount()).toEqual({
  type: 'SORT_BY_AMOUNT'
}))

test('SORT BY DATE', () => {
  const action = sortByDate()
  expect(action).toEqual({
    type: 'SORT_BY_DATE'
  })
})