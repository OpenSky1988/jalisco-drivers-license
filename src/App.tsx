import React from 'react';
import { Appearance } from 'react-native';
import { Provider } from 'react-redux';
import * as eva from '@eva-design/eva';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';

import './locales/i18n';

import Quiz from './screens/Quiz';
import Menu from './screens/Menu';
import { store as reduxStore } from './store';

const { Navigator, Screen } = createNativeStackNavigator<TRootStackParamList>();

const App: React.FC = () => {
  const colorScheme = Appearance.getColorScheme() || 'light';

  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva[colorScheme]}>
        <Provider store={reduxStore}>
          <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false }}>
              <Screen name="Menu" component={Menu} />
              <Screen
                name="Quiz"
                component={Quiz}
                options={({ route }) => ({ title: route.params.title })}
              />
            </Navigator>
          </NavigationContainer>
        </Provider>
      </ApplicationProvider>
    </>
  );
};

export default App;
