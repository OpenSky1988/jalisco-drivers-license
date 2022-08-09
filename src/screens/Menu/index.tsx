import React from 'react';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import type { IRouteItem, TProps } from './types';

const routes: IRouteItem[] = [
  {
    text: 'Ordered Quiz',
    to: 'Quiz',
  },
  {
    text: 'Randomized Quiz',
    to: 'Quiz',
    params: {
      isRandom: true,
    },
  },
  {
    text: 'Mistakes',
    to: 'Quiz',
    params: {
      isWrongAnswers: true,
    },
  },
];

const Menu: React.FC<TProps> = ({ navigation }) => {
  const renderMenuButton = ({ text, to, params }: IRouteItem) => {
    const navigate = () => navigation.navigate(to, params as undefined);

    return (
      <TouchableOpacity key={text} style={styles.menuButton} onPress={navigate}>
        <Text style={styles.menuButtonText}>{text}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <SafeAreaView>{routes.map(renderMenuButton)}</SafeAreaView>
    </View>
  );
};

export default Menu;
