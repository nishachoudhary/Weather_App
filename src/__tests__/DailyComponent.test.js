import 'react-native';
import { shallow } from 'enzyme';
import DailyComponent from '../components/DailyComponent';


test('test Daily component', () => {
 const wrapper = shallow(<DailyComponent dt_text="2018-02-19 21:00:00" />);
 expect(wrapper).toMatchSnapshot();
});