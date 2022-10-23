import React, { useEffect } from 'react';
import { useColorScheme } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
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
import { get } from './async-storage';
import { setThemeMode } from './store/slices/settings';

const { Navigator, Screen } = createNativeStackNavigator<TRootStackParamList>();

const App: React.FC = () => {
  const colorScheme = useColorScheme() || 'light';
  const dispatch = useDispatch();
  const { themeMode } = useSelector((state: RootState) => state.settings);

  useEffect(() => {
    (async () => {
      // const DSlanguage = await get('language');
      const DSthemeMode = await get('themeMode');

      dispatch(setThemeMode(DSthemeMode || colorScheme));
    })();
  }, [colorScheme, dispatch]);

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
            <Screen
              name="Quiz"
              component={Quiz}
              options={({ route }) => ({ title: route.params.title })}
            />
            <Screen name="Settings" component={Settings} />
          </Navigator>
        </NavigationContainer>
      </ApplicationProvider>
    </>
  );
};

export default App;
