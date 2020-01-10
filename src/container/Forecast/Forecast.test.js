import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Forecast from './Forecast';
import Weather from '../../components/Weather/Weather';
import MyModal from '../../components/UI/MyModal/MyModal';

configure({ adapter: new Adapter() });

describe('<Forecast />', () => {
    let wrapper;

    it('should find Weather when query exists', () => {
        wrapper = shallow(<Forecast
            required={true}
            match={{ params: { query: 'São%20Paulo' } }} />);
        expect(wrapper.find(Weather))
    });

    it('should not find Weather when query dont exists', () => {
        wrapper = shallow(<Forecast />);
        expect(wrapper.find(Weather)).toHaveLength(0);
    });

    it('should find MyModal when input is invalid', () => {
        wrapper = shallow(<Forecast
            required={true}
            match={{ params: { query: 'randonInvalidValue' } }} />);
        expect(wrapper.find(MyModal));
    });
})