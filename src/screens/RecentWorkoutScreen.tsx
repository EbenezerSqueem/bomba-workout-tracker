import React, {FunctionComponent} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';

import {RootStackParamList} from '../types/navigationProps';
import {Header} from '../components';

type WorkoutProps = {
  username?: string;
  navigation: RecentScreenNavigationProp;
};

type RecentScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Recent'
>;
// TODO: add navigation for ability to go back a page
export const RecentWorkoutScreen: FunctionComponent<WorkoutProps> = ({
  navigation,
}: WorkoutProps) => {
  return (
    <>
      <Header title={'Recent'} />
      <View style={styles.container}>
        <Text>YO</Text>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.button}>
          <Text style={styles.buttonText}>GO BACK</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingHorizontal: 25,
    backgroundColor: '#118AB2',
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
