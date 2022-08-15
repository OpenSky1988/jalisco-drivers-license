import React from 'react';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import menuRoutes from './routes';
import styles from './styles';
import type { IMenuRouteItem, TProps } from './types';

const Menu: React.FC<TProps> = ({ navigation }) => {
  const renderMenuButton = ({ title, subtitle, to, backgroundColor, params }: IMenuRouteItem) => {
    const navigate = () => navigation.navigate(to, params as undefined);

    return (
      <TouchableOpacity
        key={title}
        style={[styles.menuButton, { backgroundColor }]}
        onPress={navigate}
      >
        <Text style={styles.menuButtonTitle}>{title}</Text>
        <Text style={styles.menuButtonSubtitle}>{subtitle}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <SafeAreaView>{menuRoutes.map(renderMenuButton)}</SafeAreaView>
    </View>
  );
};

export default Menu;
