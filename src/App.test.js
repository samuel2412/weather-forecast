import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from './App'
import Forecast from './container/Forecast/Forecast';
import Weather from './components/Weather/Weather';
import MyModal from './components/UI/MyModal/MyModal';
import LandingPage from './container/LandingPage/LandingPage';

configure({ adapter: new Adapter() });

describe('<App />', () => {
    let wrapper;

    it('should find LandingPage if url is invalid', () => {
        wrapper = shallow(<App
            required={true}
            match={{ params: { query: 'randonInvalidUrl' } }} />);
        expect(wrapper.find(LandingPage))
    });

    it('should find Weather if /forecast/:query is valid', () => {
      wrapper = shallow(<App
          required={true}
          match={{ params: {query: 'São%20Paulo' } }} />);
      expect(wrapper.find(Weather))
  });
})