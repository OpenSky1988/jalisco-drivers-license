import { GoogleSignin } from '@react-native-google-signin/google-signin';
import {
  Button,
  Icon,
  IconProps,
  IndexPath,
  Layout,
  Radio,
  RadioGroup,
  Select,
  SelectItem,
  Text,
  TopNavigation,
} from '@ui-kitten/components';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { storeAll } from '../../async-storage';
import SettingsBanner from '../../components/AdMob/SettingsBanner';
import ThemedSafeAreaView from '../../components/ThemedSafeAreaView';
import { LANGUAGES, THEME_MODES } from '../../constants';
import { RootState } from '../../store';
import { setLanguage, setThemeMode } from '../../store/slices/settings';
import { useBackAction } from '../../utils/hooks';
import {
  onGoogleLoginPress,
  onGoogleLogoutPress,
  restoreUserData,
  storeUserData,
} from '../../utils/googleAuth';
import styles from './styles';
import { DEVICE_STORE_KEYS } from '../../async-storage/deviceStoreKeys';
import { setFavorites } from '../../store/slices/questions';

const Settings: React.FC = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { language, themeMode } = useSelector((state: RootState) => state.settings);
  const [isSignedIn, setSignedIn] = useState(false);

  const establishSignInStatus = async () => {
    const isIn = await GoogleSignin.isSignedIn();
    setSignedIn(isIn);
  };

  useEffect(() => {
    (async () => {
      await establishSignInStatus();
    })();
  }, []);

  const BackAction = useBackAction();
  const GoogleIcon = (props: IconProps) => <Icon {...props} name="google" />;

  const handleLanguageChange = (index: IndexPath | IndexPath[]) => {
    const selectedLanguage = LANGUAGES[(index as IndexPath).row];
    dispatch(setLanguage(selectedLanguage));
  };

  const handleThemeModeChange = (index: number) => {
    const selectedThemeMode = THEME_MODES[index];
    dispatch(setThemeMode(selectedThemeMode));
  };

  const hangleGoogleLoginPress = async () => {
    await onGoogleLoginPress();
    await establishSignInStatus();

    const userData = await restoreUserData();

    if (userData) {
      Alert.alert(t('settings.sync_modal.title'), t('settings.sync_modal.description'), [
        {
          text: t('settings.sync_modal.from_cloud'),
          onPress: async () => {
            await storeAll(userData);

            dispatch(setLanguage(userData.language));
            dispatch(setThemeMode(userData.themeMode));
            dispatch(setFavorites(userData[DEVICE_STORE_KEYS.FAVORITES]));
          },
          style: 'cancel',
        },
        {
          text: t('settings.sync_modal.to_cloud'),
          onPress: async () => {
            await storeUserData();
          },
        },
      ]);
    } else {
      await storeUserData();
    }
  };

  const hangleGoogleLogoutPress = async () => {
    await onGoogleLogoutPress();
    await establishSignInStatus();
  };

  return (
    <ThemedSafeAreaView>
      <TopNavigation
        title={t('settings.screen_title')}
        alignment="center"
        accessoryLeft={BackAction}
      />
      <Layout style={styles.container}>
        <Text style={styles.text} category="h6">
          {t('settings.language.title')}
        </Text>
        <Select
          style={styles.setting}
          selectedIndex={new IndexPath(LANGUAGES.indexOf(language))}
          onSelect={handleLanguageChange}
          value={t(`settings.language.options.${language}`)}
        >
          <SelectItem title={t('settings.language.options.es')} />
          <SelectItem title={t('settings.language.options.en')} />
        </Select>
        <Text style={styles.text} category="h6">
          {t('settings.themeMode.title')}
        </Text>
        <RadioGroup
          style={styles.setting}
          selectedIndex={THEME_MODES.indexOf(themeMode)}
          onChange={handleThemeModeChange}
        >
          <Radio>{t('settings.themeMode.options.system')}</Radio>
          <Radio>{t('settings.themeMode.options.light')}</Radio>
          <Radio>{t('settings.themeMode.options.dark')}</Radio>
        </RadioGroup>
        <Button
          accessoryLeft={GoogleIcon}
          disabled={isSignedIn}
          onPress={hangleGoogleLoginPress}
          style={styles.loginButton}
        >
          {t('settings.googleLogin')}
        </Button>
        <Button disabled={!isSignedIn} onPress={hangleGoogleLogoutPress} style={styles.loginButton}>
          {t('settings.logout')}
        </Button>
      </Layout>
      <Layout style={styles.adContainer}>
        <SettingsBanner />
      </Layout>
    </ThemedSafeAreaView>
  );
};

export default Settings;
