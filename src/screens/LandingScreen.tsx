import React, {FunctionComponent} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
// import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import {RootStackParamList} from '../types/navigationProps';

// type LandingScreenRouteProps = RouteProp<RootStackParamList, 'Landing'>;

type LandingScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Landing'
>;

type Props = {
  // route?: LandingScreenRouteProps;
  navigation: LandingScreenNavigationProp;
};

export const LandingScreen: FunctionComponent<Props> = ({
  navigation,
}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bomba Workout Tracker</Text>
      <Text style={styles.subTitle}>
        Track all of your workouts from weight lifting to sports tracking.
      </Text>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text>GET TRACKING</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 48,
  },
  subTitle: {
    fontSize: 32,
  },
});
