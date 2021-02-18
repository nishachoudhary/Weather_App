import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator, HeaderBackground } from "@react-navigation/stack";
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import WeatherScreen from './src/screens/WeatherScreen'
import EnterZipScreen from './src/screens/EnterZipScreen'
import WeatherReducer from './src/store/reducer/WeatherReducer'

export default function App() {
  const stack = createStackNavigator();
  const store = createStore(WeatherReducer);


  return (
    <Provider store={store}>
      <NavigationContainer>
        <stack.Navigator>
          <stack.Screen
            name="EnterZipScreen"
            component={EnterZipScreen}
            options={{
              title: 'Weather Forecast',
              headerTintColor: '#ff80df',
              headerStyle: {
                backgroundColor: '#004d99',
              },
            }}
          />
          <stack.Screen
            name="WeatherScreen"
            component={WeatherScreen}
            options={{
              title: 'Weather Forecast',
              headerTintColor: '#ff80df',
              headerStyle: {
                backgroundColor: '#004d99',
              },
            }}
          />
        </stack.Navigator>

      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 50,
    marginHorizontal: 10,
    backgroundColor: '#666699'

  },
});
