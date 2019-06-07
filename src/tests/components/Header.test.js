import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import ReactShallowRenderer from 'react-test-renderer/shallow'
import Header from '../../components/Header'

test('shoud render Header correctly', () => {
  const wrapper = shallow(<Header />)
  expect(wrapper).toMatchSnapshot()
  
  // const renderer = new ReactShallowRenderer()
  // renderer.render(<Header />)
  // console.log(renderer.getRenderOutput())
  // expect(renderer.getRenderOutput()).toMatchSnapshot()
})