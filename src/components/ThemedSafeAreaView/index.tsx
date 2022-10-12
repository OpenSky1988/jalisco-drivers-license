import React from 'react';
import { SafeAreaView } from 'react-native';
import { useTheme } from '@ui-kitten/components';
import styles from './styles';

const ThemedSafeAreaView: React.FC = ({ children }) => {
  const theme = useTheme();

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: theme['background-basic-color-1'] }]}>
      {children}
    </SafeAreaView>
  );
};

export default ThemedSafeAreaView;
