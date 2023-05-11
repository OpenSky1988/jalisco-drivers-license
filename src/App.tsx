import React from 'react';
import { WITH_GOOGLE_LOGIN } from '@env';
import * as eva from '@eva-design/eva';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { useSelector } from 'react-redux';

import Quiz from './screens/Quiz';
import Menu from './screens/Menu';
import Settings from './screens/Settings';
import { RootState } from './store';
import theme from './theme/custom-theme.json';
import { useLocale, useThemeMode } from './hooks';

if (WITH_GOOGLE_LOGIN === 'true') {
  GoogleSignin.configure({
    webClientId: '581434553465-0hmeiam279hbo2524kfoi8ccbjc99lb1.apps.googleusercontent.com',
  });
}

const { Navigator, Screen } = createNativeStackNavigator<TRootStackParamList>();

const App: React.FC = () => {
  const colorScheme = useThemeMode();
  useLocale();

  const { themeMode } = useSelector((state: RootState) => state.settings);

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
