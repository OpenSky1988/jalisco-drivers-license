import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Quiz from './screens/Quiz';
import Menu from './screens/Menu';
import { store } from './store';
import { BookmarkOutlined } from './components/Icons/BookmarkOutlined';

export type TRootStackParamList = {
  Menu: undefined;
  Quiz: {
    quizType?: string;
    title?: string;
  };
};

const { Navigator, Screen } = createNativeStackNavigator<TRootStackParamList>();

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Navigator>
          <Screen name="Menu" component={Menu} />
          <Screen
            name="Quiz"
            component={Quiz}
            options={({ route }) => ({
              title: route.params.title,
              headerRight: () => <BookmarkOutlined />,
            })}
          />
        </Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
