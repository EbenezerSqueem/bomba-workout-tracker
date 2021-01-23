import React from 'react';
import {Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

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
  onPressFunc,
  ...restProps
}: any) {
  return (
    <TouchableOpacity onPress={() => onPressFunc} {...restProps}>
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

Carousel.CardList = function CarouselCardList({children, ...restProps}: any) {
  return <Text {...restProps}>{children}</Text>;
};
