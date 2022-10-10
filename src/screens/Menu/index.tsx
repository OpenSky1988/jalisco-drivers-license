import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { get } from '../../async-storage';
import { DEVICE_STORE_KEYS } from '../../async-storage/deviceStoreKeys';
import { setFavorites } from '../../store/slices/questions';

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
  const dispatch = useDispatch();
  const [buttonSubtitle, setButtonSubtitle] = useState(subtitle);

  const navigate = () => navigation.navigate(to, params as undefined);

  useEffect(() => {
    (async () => {
      const favorites = (await get(DEVICE_STORE_KEYS.FAVORITES)) || [];
      dispatch(setFavorites(favorites));
    })();
  }, [dispatch]);

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

const Menu: React.FC<TProps> = (navigationProps) => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        {menuRoutes.map((route) => (
          <MenuButton key={route.title} {...{ ...route, ...navigationProps }} />
        ))}
      </SafeAreaView>
    </View>
  );
};

export default Menu;
