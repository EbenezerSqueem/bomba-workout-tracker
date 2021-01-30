import React from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import {} from 'react-native-gesture-handler';

import {CarouselStyles} from './styles/carousel';

export default function Carousel({children, ...restProps}: any) {
  return (
    <View style={CarouselStyles.carouselContainer} {...restProps}>
      {children}
    </View>
  );
}

Carousel.Title = function CarouselTitle({
  children,
  navigation,
  route,
  ...restProps
}: any) {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate(route);
      }}
      {...restProps}>
      <Text style={CarouselStyles.title}>{children}</Text>
    </TouchableOpacity>
  );
};

Carousel.Subtitle = function CarouselSubtitle({children, ...restProps}: any) {
  return (
    <Text style={CarouselStyles.subtitle} {...restProps}>
      {children}
    </Text>
  );
};

Carousel.CardList = function CarouselCardList({list}: any) {
  return (
    <FlatList
      data={Object.entries(list)}
      renderItem={renderCard}
      style={CarouselStyles.listContainer}
      horizontal={true}
      keyExtractor={(item) => {
        return item[0];
      }}
    />
  );
};

// todo make type recentworkout and import it here
const renderCard = ({item}: any) => {
  return (
    <View style={CarouselStyles.cardContainer}>
      <Text style={CarouselStyles.workoutName}>{item[1].name}</Text>
    </View>
  );
};
