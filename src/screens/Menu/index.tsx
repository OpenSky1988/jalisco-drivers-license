import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';

import menuRoutes from './routes';
import styles from './styles';
import type { IMenuRouteItem, TProps } from './types';
import { getSubtitle } from './utils';

const MenuButton = ({
  backgroundColor,
  navigation,
  params,
  subtitle = '',
  title,
  to,
}: IMenuRouteItem & TProps) => {
  const navigate = () => navigation.navigate(to, params as undefined);
  const [buttonSubtitle, setButtonSubtitle] = useState(subtitle);

  useEffect(() => {
    (async () => {
      const newSubtitle = await getSubtitle(subtitle, params?.quizType as string);
      setButtonSubtitle(newSubtitle);
    })();
  }, [params?.quizType, subtitle]);

  return (
    <TouchableOpacity
      key={title}
      style={[styles.menuButton, { backgroundColor }]}
      onPress={navigate}
    >
      <Text style={styles.menuButtonTitle}>{title}</Text>
      <Text style={styles.menuButtonSubtitle}>{buttonSubtitle}</Text>
    </TouchableOpacity>
  );
};

const Menu: React.FC<TProps> = (navigationProps) => (
  <View style={styles.container}>
    <SafeAreaView>
      {menuRoutes.map((route) => (
        <MenuButton key={route.title} {...{ ...route, ...navigationProps }} />
      ))}
    </SafeAreaView>
  </View>
);

export default Menu;
