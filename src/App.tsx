import React from 'react';
import { useSelector } from 'react-redux';
import * as eva from '@eva-design/eva';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';

import Quiz from './screens/Quiz';
import Menu from './screens/Menu';
import Settings from './screens/Settings';
import { RootState } from './store';
import theme from './theme/custom-theme.json';
import { useLocale, useThemeMode } from './hooks';

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
