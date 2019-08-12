// Import Modules
import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import { shallow, configure } from 'enzyme'

// Import Components
import ProductCard from './index'

// Import Products
 import { PRODUCTS } from '../../config/PRODUCTS'

configure({ adapter: new Adapter() })

it('renders without crashing', () => {
  shallow(<ProductCard product={PRODUCTS[0]}/>)
});
