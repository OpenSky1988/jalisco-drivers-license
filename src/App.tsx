import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Quiz from './screens/Quiz';
import Menu from './screens/Menu';
import { store } from './store';

export type TRootStackParamList = {
  Menu: undefined;
  Quiz: {
    testTypeKey?: string;
  };
};

const { Navigator, Screen } = createNativeStackNavigator<TRootStackParamList>();

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Navigator>
          <Screen name="Menu" component={Menu} />
          <Screen name="Quiz" component={Quiz} />
        </Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
