import React from 'react'
import 'react-native';

import { shallow } from 'enzyme';
import CurrentWeather from '../components/CurrentWeather';


test('test Current Weather component', () => {

    const wrapper = shallow(<CurrentWeather
        cityName='Test City'
        dt_txt='2018-02-19  21:00:00'
        icon=''
        description='cloud'
        temp={899.00}
        tempMinMax='201/301' />);
    expect(wrapper).toMatchSnapshot();
});