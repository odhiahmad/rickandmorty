import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Platform} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {COLOR} from '../common/styles';
import StackCharacter from './route.character';
import StackEpisode from './route.episode';

const Tab = createBottomTabNavigator();

const BottomNavigator = ({navigation}) => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          paddingBottom: Platform.OS === 'ios' ? 25 : 10,
          height: Platform.OS === 'ios' ? 80 : 60,
          borderTopWidth: 0,
          elevation: 10,
          shadowColor: '#000',
          shadowOffset: {width: 0, height: 2},
          shadowOpacity: 0.5,
          shadowRadius: 2,
        },
        style: {
          borderTopColor: '#66666666',
          backgroundColor: 'transparent',
          elevation: 0,
        },

        // showLabel: false,
        activeBackgroundColor: COLOR.bottomTab,
        inactiveTintColor: COLOR.bottomTab,
        activeTintColor: COLOR.white,
      }}>
      <Tab.Screen
        name="Character"
        component={StackCharacter}
        options={{
          tabBarLabel: 'Character',
          tabBarIcon: ({color}) => (
            <MaterialIcons name="person" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Episode"
        component={StackEpisode}
        options={{
          tabBarLabel: 'Episode',
          tabBarIcon: ({color}) => (
            <MaterialIcons name="tv" color={color} size={24} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigator;
