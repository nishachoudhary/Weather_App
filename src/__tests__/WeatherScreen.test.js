import React from 'react'
import 'react-native';

import { shallow } from 'enzyme';
import WeatherScreen from '../screens/WeatherScreen';


test('test Weather Screen', () => {

    const wrapper = shallow(<WeatherScreen
        />);
    expect(wrapper).toMatchSnapshot();
});