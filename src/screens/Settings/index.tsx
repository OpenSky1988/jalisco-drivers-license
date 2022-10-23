import { useRoute } from '@react-navigation/native';
import {
  IndexPath,
  Layout,
  Radio,
  RadioGroup,
  Select,
  SelectItem,
  Text,
  TopNavigation,
} from '@ui-kitten/components';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import ThemedSafeAreaView from '../../components/ThemedSafeAreaView';
import { RootState } from '../../store';
import { setLanguage, setThemeMode, TLanguage, TThemeMode } from '../../store/slices/settings';
import { useBackAction } from '../../utils/hooks';
import styles from './styles';

const Settings: React.FC = () => {
  const dispatch = useDispatch();
  const route = useRoute();
  const { t } = useTranslation();
  const { language, themeMode } = useSelector((state: RootState) => state.settings);

  const BackAction = useBackAction();

  const languages: TLanguage[] = ['es', 'en'];
  const themeModes: TThemeMode[] = ['system', 'light', 'dark'];

  const handleLanguageChange = (index: IndexPath | IndexPath[]) => {
    const selectedLanguage = languages[(index as IndexPath).row];
    dispatch(setLanguage(selectedLanguage));
  };

  const handleThemeModeChange = (index: number) => {
    const selectedThemeMode = themeModes[index];
    dispatch(setThemeMode(selectedThemeMode));
  };

  return (
    <ThemedSafeAreaView>
      <TopNavigation title={route.name} alignment="center" accessoryLeft={BackAction} />
      <Layout style={styles.container}>
        <Text style={styles.text} category="h6">
          {t('settings.language.title')}
        </Text>
        <Select
          style={styles.setting}
          selectedIndex={new IndexPath(languages.indexOf(language))}
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
          selectedIndex={themeModes.indexOf(themeMode)}
          onChange={handleThemeModeChange}
        >
          <Radio>{t('settings.themeMode.options.system')}</Radio>
          <Radio>{t('settings.themeMode.options.light')}</Radio>
          <Radio>{t('settings.themeMode.options.dark')}</Radio>
        </RadioGroup>
      </Layout>
    </ThemedSafeAreaView>
  );
};

export default Settings;
