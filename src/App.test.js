import React from 'react';
import ReactDOM from 'react-dom';
//import { render } from '@testing-library/react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


configure({ adapter: new Adapter() });

import App from './App';

import MyProvider from './components/MyProvider';

const data =  [{
        "name": "Test Whatsapp",
        "region": "US",
        "createdOn": 1556976904000,
        "price": "Price info of Test Whatsapp",
        "csv": "Some CSV link for Whatsapp",
        "report": "Some report link for Whatsapp",
        "image_url":"https://res.cloudinary.com/dgrovf3st/image/upload/v1576408988/bluestacks/Bitmap_nqvkhh.png" 
      }
    ]

it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<MyProvider><App /></MyProvider>, div);
      ReactDOM.unmountComponentAtNode(div);
});

describe('App component', () => {
   const wrapper = mount(<MyProvider data={data}><App /></MyProvider>);
      it('has heading Manage Campaigns', () => {
        const text = wrapper.find('h2').text();
        expect(text).toEqual('Manage Campaigns');
      });

      it('should move campaign to Live', () => {
        const datepicker = wrapper.find('#uncontrolled-tab-example-tabpane-past #datepicker-0');
        datepicker.at(0).simulate('change', {target: {value: new Date()}})

        const liveTab = wrapper.find('#uncontrolled-tab-example-tab-live').at(0);
        liveTab.simulate('click');

        expect(wrapper.find('tr').exists()).toEqual(true);

      });
});

