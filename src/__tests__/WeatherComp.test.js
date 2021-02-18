import React from 'react'
import 'react-native';

import { shallow } from 'enzyme';
import WeatherComp from '../components/WeatherComp';


test('test  Weather component', () => {

    const wrapper = shallow(<WeatherComp
        dt_txt='2018-02-19  21:00:00'
        icon=''
        temp={899.00}
        humidity="6" />);
    expect(wrapper).toMatchSnapshot();
});