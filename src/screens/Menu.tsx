import React from 'react';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import type { TRootStackParamList } from '../App';

type TProps = NativeStackScreenProps<TRootStackParamList, 'Menu'>;

interface IRouteItem {
  key: string;
  text: string;
  to: keyof TRootStackParamList;
}

const routes: IRouteItem[] = [
  {
    key: 'Quiz',
    text: 'Take Quiz',
    to: 'Quiz',
  },
];

const Menu: React.FC<TProps> = ({ navigation }) => {
  const renderMenuButton = ({ key, text, to }: IRouteItem) => {
    const navigate = () => navigation.navigate(to);

    return (
      <TouchableOpacity key={key} style={styles.menuButton} onPress={navigate}>
        <Text style={styles.menuButtonText}>{text}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <SafeAreaView>{routes.map(renderMenuButton)}</SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 40,
    paddingHorizontal: 16,
    position: 'relative',
  },
  menuButton: {
    alignItems: 'center',
    borderRadius: 20,
    borderWidth: 3,
    flexDirection: 'row',
    height: 60,
    justifyContent: 'space-between',
    marginVertical: 10,
    paddingHorizontal: 20,
  },
  menuButtonText: {
    fontSize: 20,
  },
});

export default Menu;
