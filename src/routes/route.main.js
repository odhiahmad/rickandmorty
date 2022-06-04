import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomNavigation from './BottomNavigation';

const Stack = createNativeStackNavigator();

const StackMain = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="AppLoad"
      component={BottomNavigation}
      options={{
        headerShown: false,
      }}
    />
  </Stack.Navigator>
);

export default StackMain;
