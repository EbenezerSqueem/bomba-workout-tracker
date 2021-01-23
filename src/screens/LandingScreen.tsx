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
      <Text style={styles.title}>Bomba Workouts</Text>
      <Text style={styles.subTitle}>
        Track all of your workouts from weight lifting to sports tracking.
      </Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('Home')}
        style={styles.button}>
        <Text style={styles.buttonText}>GET TRACKING</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 25,
    backgroundColor: '#118AB2',
  },
  title: {
    fontSize: 48,
    alignItems: 'center',
    color: '#231F20',
  },
  subTitle: {
    fontSize: 18,
    marginVertical: 25,
    marginHorizontal: 20,
    color: '#231F20',
  },
  button: {
    backgroundColor: '#231F20',
    width: '75%',
    borderRadius: 10,
    alignItems: 'center',
    padding: 10,
  },
  buttonText: {
    fontWeight: 'bold',
    color: '#118AB2',
  },
});
