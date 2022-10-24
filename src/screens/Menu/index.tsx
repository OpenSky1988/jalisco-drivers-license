import React, { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { useFocusEffect } from '@react-navigation/native';
import { Layout, Text, TopNavigation, useTheme } from '@ui-kitten/components';

import { get } from '../../async-storage';
import { DEVICE_STORE_KEYS } from '../../async-storage/deviceStoreKeys';
import ThemedSafeAreaView from '../../components/ThemedSafeAreaView';
import { setFavorites } from '../../store/slices/questions';
import menuRoutes from './routes';
import styles from './styles';
import type { IMenuRouteItem, TProps } from './types';
import { getSubtitle } from './utils';
import { useSettingsAction } from './hooks';
import { useTranslation } from 'react-i18next';

const MenuButton = ({ navigation, params, subtitle = '', title, to }: IMenuRouteItem & TProps) => {
  const dispatch = useDispatch();
  const theme = useTheme();

  const [buttonSubtitle, setButtonSubtitle] = useState(subtitle);

  const navigate = () => navigation.navigate(to, params as undefined);

  useEffect(() => {
    (async () => {
      const favorites = (await get(DEVICE_STORE_KEYS.FAVORITES)) || [];
      dispatch(setFavorites(favorites));
    })();
  }, [dispatch]);

  useFocusEffect(() => {
    (async () => {
      const newSubtitle = await getSubtitle(subtitle, params?.quizType as string);
      setButtonSubtitle(newSubtitle);
    })();
  });

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
  const { t } = useTranslation();
  const SettingsAction = useSettingsAction();

  return (
    <ThemedSafeAreaView>
      <TopNavigation
        title={t('menu.screen_title')}
        alignment="center"
        accessoryRight={SettingsAction}
      />
      <Layout style={styles.container}>
        {menuRoutes.map((routeItem) => (
          <MenuButton
            key={routeItem.title}
            {...{
              ...routeItem,
              ...navigationProps,
              title: t(`routes.${routeItem.title}.title`),
              subtitle: routeItem.subtitle && t(`routes.${routeItem.subtitle}.subtitle`),
            }}
          />
        ))}
      </Layout>
    </ThemedSafeAreaView>
  );
};

export default Menu;
