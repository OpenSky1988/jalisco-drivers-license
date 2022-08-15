import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import styles from './styles';
import type { INextButtonProps } from './types';

const NextButton: React.FC<INextButtonProps> = ({ handleNext }) => {
  const { showNextButton } = useSelector((state: RootState) => state.questions);

  return showNextButton ? (
    <TouchableOpacity onPress={handleNext} style={styles.nextButton}>
      <Text style={styles.nextButtonText}>Next</Text>
    </TouchableOpacity>
  ) : null;
};

export default NextButton;
