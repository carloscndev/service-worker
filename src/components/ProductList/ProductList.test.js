import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import { shallow, configure } from 'enzyme'
import ProductList from './index'

import { PRODUCTS } from '../../config/PRODUCTS'

configure({ adapter: new Adapter() })

it('renders without crashing', () => {
  shallow(<ProductList products={PRODUCTS}/>)
});

it('render no product card when product is empty', () => {
  const wrapper = shallow(<ProductList products={[]}/>)
  expect(wrapper.find(".product-card").length).toBe(0)
})
