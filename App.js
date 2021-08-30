import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import Base from './screens/Base'
import Bus from './screens/Bus'
import Schedule from './screens/Schedule'

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Base" component={Base} />
        <Stack.Screen name="Bus" component={Bus}/>
        <Stack.Screen name="Schedule" component={Schedule}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack