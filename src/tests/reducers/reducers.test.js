import filtersReducer from '../../reducers/filters'
import moment from 'moment'

test('shoud set up the default filter values', ()=> {
  const state = filtersReducer(undefined, { type: '@@INIT'})
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  })
})

test('should set sortBy to amount', () => {
  const state = filtersReducer(undefined, {type: 'SORT_BY_AMOUNT'})
  expect(state.sortBy).toBe('amount')
})

test('should set sortBy To date', () => {
  const currentState = {
    text: '',
    startDate: undefined ,
    endDate: undefined,
    sortBy: 'amount'

  }

  const action = {
    type: 'SORT_BY_DATE'
  }

  const result = filtersReducer(currentState, action)

  expect(result.sortBy).toBe('date')
})

test('should set textfilter', () => {
  const result = filtersReducer(undefined, {
    type:'SET_TEXT_FILTER',
    text: 'this is passing the test'
})

  expect(result.text).toBe('this is passing the test')
})

test('should set startDate', () => {
  const myMoment = moment().add(3, 'months').endOf('month')

  const result = filtersReducer(undefined, {
    type: 'SET_START_DATE',
    startDate:myMoment
  })

  expect(result.startDate).toBe(myMoment)
})

function lastTest() {
  const myMoment = moment().subtract(1, 'months').endOf('month')

  const result = filtersReducer(undefined, {
    type: 'SET_END_DATE',
    endDate: myMoment
  })

  expect(result.endDate).toBe(myMoment)
}

test('should set endDate', lastTest)


const myMoment = moment().subtract(1, 'months').endOf('month')

console.log('FINISHED',typeof myMoment)