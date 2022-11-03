import React from 'react';
import { useTranslation } from 'react-i18next';
import { Layout, TopNavigation } from '@ui-kitten/components';

import ThemedSafeAreaView from '../../components/ThemedSafeAreaView';
import menuRoutes from './routes';
import styles from './styles';
import type { TProps } from './types';
import { useSettingsAction } from './hooks';
import MenuButton from '../../components/MenuButton';
import { ScrollView } from 'react-native';

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
        <ScrollView>
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
        </ScrollView>
      </Layout>
    </ThemedSafeAreaView>
  );
};

export default Menu;
