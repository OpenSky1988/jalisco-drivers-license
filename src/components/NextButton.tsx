import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { COLORS } from '../constants';

interface IProps {
  handleNext: () => void;
  showNextButton: boolean;
}

const NextButton: React.FC<IProps> = ({ handleNext, showNextButton }) =>
  showNextButton ? (
    <TouchableOpacity onPress={handleNext} style={styles.nextButton}>
      <Text style={styles.nextButtonText}>Next</Text>
    </TouchableOpacity>
  ) : null;

const styles = StyleSheet.create({
  nextButton: {
    backgroundColor: COLORS.accent,
    borderRadius: 5,
    marginTop: 20,
    padding: 20,
    width: '100%',
  },
  nextButtonText: {
    color: COLORS.white,
    fontSize: 20,
    textAlign: 'center',
  },
});

export default NextButton;
