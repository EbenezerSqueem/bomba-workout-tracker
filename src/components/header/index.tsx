import React, {FunctionComponent} from 'react';
import {Text, View} from 'react-native';

import {styles} from './styles/header';

interface HeaderProps {
  title?: string;
}

export const Header: FunctionComponent<HeaderProps> = ({
  title,
}: HeaderProps) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.title}>{title} | Bomba Tracker</Text>
    </View>
  );
};
