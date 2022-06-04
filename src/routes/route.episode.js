import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import EpisodeScreen from '../modules/Episode';
import DetailEpisode from '../modules/Episode/DetailEpisode';
const Stack = createNativeStackNavigator();

const StackEpisode = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="EpisodeScreen"
      component={EpisodeScreen}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="DetailEpisode"
      component={DetailEpisode}
      options={{
        headerShown: false,
      }}
    />
  </Stack.Navigator>
);

export default StackEpisode;
