import React from 'react';
import { Animated, StyleSheet, View } from 'react-native';
import { COLORS } from '../constants';

interface IProps {
  progress: Animated.Value;
  questionsLength: number;
}

const ProgressBar: React.FC<IProps> = ({ progress, questionsLength }) => {
  const progressAnimation = progress.interpolate({
    inputRange: [0, questionsLength],
    outputRange: ['0%', '100%'],
  });

  return (
    <View style={styles.progressBarContainer}>
      <Animated.View style={[styles.progressBar, { width: progressAnimation }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  progressBarContainer: {
    backgroundColor: '#00000020',
    borderRadius: 20,
    height: 20,
    width: '100%',
  },
  progressBar: {
    backgroundColor: COLORS.accent,
    borderRadius: 20,
    height: 20,
  },
});

export default ProgressBar;
