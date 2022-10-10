import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import './locales/i18n';

import Quiz from './screens/Quiz';
import Menu from './screens/Menu';
import { store as reduxStore } from './store';

export type TRootStackParamList = {
  Menu: undefined;
  Quiz: {
    quizType?: string;
    title?: string;
  };
};

const { Navigator, Screen } = createNativeStackNavigator<TRootStackParamList>();

const App: React.FC = () => (
  <Provider store={reduxStore}>
    <NavigationContainer>
      <Navigator>
        <Screen name="Menu" component={Menu} />
        <Screen
          name="Quiz"
          component={Quiz}
          options={({ route }) => ({ title: route.params.title })}
        />
      </Navigator>
    </NavigationContainer>
  </Provider>
);

export default App;
