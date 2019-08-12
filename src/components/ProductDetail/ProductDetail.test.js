// Import Modules
import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import { shallow, configure } from 'enzyme'

// Import Components
import ProductDetail from './index';

// Import Products
import { PRODUCTS } from '../../config/PRODUCTS'

configure({ adapter: new Adapter() })

it('renders without crashing', () => {
  shallow(<ProductDetail product={PRODUCTS[0]} />)
});
