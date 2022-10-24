import React, { useEffect } from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import * as eva from '@eva-design/eva';
import RNLanguageDetector from '@os-team/i18next-react-native-language-detector';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';

import Quiz from './screens/Quiz';
import Menu from './screens/Menu';
import Settings, { languages } from './screens/Settings';
import { RootState } from './store';
import theme from './theme/custom-theme.json';
import { get } from './async-storage';
import { setLanguage, setThemeMode, TLanguage } from './store/slices/settings';
import { useTranslation } from 'react-i18next';

const { Navigator, Screen } = createNativeStackNavigator<TRootStackParamList>();

const App: React.FC = () => {
  const colorScheme = useColorScheme() || 'light';
  const OSlanguage = RNLanguageDetector.detect() as string;
  const defaultLanguage = languages.includes(OSlanguage as TLanguage) ? OSlanguage : 'en';

  const { i18n } = useTranslation();
  const dispatch = useDispatch();

  const { language, themeMode } = useSelector((state: RootState) => state.settings);
  const activeTheme = themeMode === 'system' ? colorScheme : themeMode;

  useEffect(() => {
    (async () => {
      const DSlanguage = await get('language');
      const DSthemeMode = await get('themeMode');

      dispatch(setLanguage(DSlanguage || defaultLanguage));
      dispatch(setThemeMode(DSthemeMode || colorScheme));
      StatusBar.setBarStyle(`${activeTheme === 'dark' ? 'light' : 'dark'}-content`);
    })();
  }, [OSlanguage, colorScheme, dispatch, defaultLanguage, activeTheme]);

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [i18n, language]);

  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider
        {...eva}
        theme={{ ...eva[themeMode === 'system' ? colorScheme : themeMode], ...theme }}
      >
        <NavigationContainer>
          <Navigator screenOptions={{ headerShown: false }}>
            <Screen name="Menu" component={Menu} />
            <Screen name="Quiz" component={Quiz} />
            <Screen name="Settings" component={Settings} />
          </Navigator>
        </NavigationContainer>
      </ApplicationProvider>
    </>
  );
};

export default App;
