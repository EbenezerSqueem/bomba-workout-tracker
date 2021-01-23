import React, {ReactElement} from 'react';
import {Text, View} from 'react-native';

import {styles} from './styles/header';

interface HeaderProps {
  title?: string;
  navigation?: any;
}
// TODO: add navigation for ability to go back a page
export default function Header({title}: HeaderProps): ReactElement<any, any> {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.title}>{title} | Bomba Fitness</Text>
    </View>
  );
}
