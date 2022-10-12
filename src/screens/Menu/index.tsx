import React, { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { useRoute } from '@react-navigation/native';
import { Layout, Text, TopNavigation, useTheme } from '@ui-kitten/components';

import { get } from '../../async-storage';
import { DEVICE_STORE_KEYS } from '../../async-storage/deviceStoreKeys';
import ThemedSafeAreaView from '../../components/ThemedSafeAreaView';
import { setFavorites } from '../../store/slices/questions';
import menuRoutes from './routes';
import styles from './styles';
import type { IMenuRouteItem, TProps } from './types';
import { getSubtitle } from './utils';

const MenuButton = ({ navigation, params, subtitle = '', title, to }: IMenuRouteItem & TProps) => {
  const dispatch = useDispatch();
  const [buttonSubtitle, setButtonSubtitle] = useState(subtitle);
  const theme = useTheme();

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
      onPress={navigate}
      style={[styles.menuButton, { backgroundColor: theme['color-primary-500'] }]}
    >
      <Text style={styles.menuButtonTitle}>{title}</Text>
      <Text style={styles.menuButtonSubtitle}>{buttonSubtitle}</Text>
    </TouchableOpacity>
  );
};

const Menu: React.FC<TProps> = (navigationProps) => {
  const route = useRoute();

  return (
    <ThemedSafeAreaView>
      <TopNavigation title={route.name} alignment="center" />
      <Layout style={styles.container}>
        {menuRoutes.map((routeItem) => (
          <MenuButton key={routeItem.title} {...{ ...routeItem, ...navigationProps }} />
        ))}
      </Layout>
    </ThemedSafeAreaView>
  );
};

export default Menu;
