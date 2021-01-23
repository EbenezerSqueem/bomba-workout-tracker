import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {RootStackParamList} from '../types/navigationProps';
import {HomeScreen} from '../screens/HomeScreen';
import {LandingScreen} from '../screens/LandingScreen';
import {RecentWorkoutScreen} from '../screens/RecentWorkoutScreen';

const Stack = createStackNavigator<RootStackParamList>();

export const RootStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Landing" component={LandingScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Recent" component={RecentWorkoutScreen} />
    </Stack.Navigator>
  );
};
