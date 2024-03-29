import React, { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { useFocusEffect } from '@react-navigation/native';
import { Text, useTheme } from '@ui-kitten/components';

import { get } from '../../async-storage';
import { DEVICE_STORE_KEYS } from '../../async-storage/deviceStoreKeys';
import { IMenuRouteItem, TProps } from '../../screens/Menu/types';
import { setFavorites } from '../../store/slices/questions';
import styles from './styles';
import { getSubtitle } from './utils';

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

export default MenuButton;
