import React from 'react'
import 'react-native';

import { shallow } from 'enzyme';
import EnterZipScreen from '../screens/EnterZipScreen';


test('test  Enter Zip Screen', () => {

    const wrapper = shallow(<EnterZipScreen
        />);
    expect(wrapper).toMatchSnapshot();
});