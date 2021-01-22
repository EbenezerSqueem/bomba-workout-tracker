import React, {FunctionComponent} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';

import {RootStackParamList} from '../types/navigationProps';
import Header from '../components';

interface HomeProps {
  username?: string;
  navigation: LandingScreenNavigationProp;
}

type LandingScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Home'
>;

export const HomeScreen: FunctionComponent<HomeProps> = ({
  username,
  navigation,
}: HomeProps) => {
  return (
    <>
      <Header title={'Home'} />
      <View style={styles.container}>
        <Text>Hello, {username}</Text>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.button}>
          <Text style={styles.buttonText}>GO BACK</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

HomeScreen.defaultProps = {
  username: 'Guest',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 25,
  },
  button: {
    backgroundColor: 'blue',
    width: '75%',
    borderRadius: 10,
    alignItems: 'center',
    padding: 10,
  },
  buttonText: {
    fontWeight: 'bold',
    color: 'white',
  },
});
