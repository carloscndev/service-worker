// Import Modules
import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import { shallow, configure } from 'enzyme'

// Import Components
import SubHeader from './index'

configure({ adapter: new Adapter() })

it('renders without crashing', () => {
  shallow(<SubHeader />)
});
