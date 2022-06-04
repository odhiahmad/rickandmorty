import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CharacterScreen from '../modules/Character';
import DetailCharacter from '../modules/Character/DetailCharacter';

const Stack = createNativeStackNavigator();

const StackCharacter = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="CharacterScreen"
      component={CharacterScreen}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="DetailCharacter"
      component={DetailCharacter}
      options={{
        headerShown: false,
      }}
    />
  </Stack.Navigator>
);

export default StackCharacter;
