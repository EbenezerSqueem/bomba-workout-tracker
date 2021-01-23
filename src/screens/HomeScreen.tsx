import React, {FunctionComponent} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';

import {RootStackParamList} from '../types/navigationProps';
import {Header, Carousel} from '../components';

interface HomeProps {
  username?: string;
  navigation: HomeScreenNavigationProp;
}

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

// TODO: add navigation for ability to go back a page
export const HomeScreen: FunctionComponent<HomeProps> = ({
  username,
  navigation,
}: HomeProps) => {
  return (
    <>
      <Header title={'Home'} />
      <View style={styles.container}>
        <Text>Hello, {username}</Text>
        <Carousel>
          <Carousel.Title
            onPressFunc={() => {
              console.log('Triggered');
              navigation.navigate('Recent');
            }}>
            RECENT WORKOUTS
          </Carousel.Title>
        </Carousel>
        <Carousel>
          <Carousel.Title>SAVED WORKOUTS</Carousel.Title>
        </Carousel>
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
