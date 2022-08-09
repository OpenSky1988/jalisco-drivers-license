import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { nextQuestion } from '../../store/slices/questions';
import styles from './styles';
import type { INextButtonProps } from './types';

const NextButton: React.FC<INextButtonProps> = ({ animateProgress }) => {
  const dispatch = useDispatch();
  const { currentQuestionIndex, questionList, showNextButton } = useSelector(
    (state: RootState) => state.questions,
  );

  const handleNext = () => {
    dispatch(
      nextQuestion({
        currentQuestionIndex,
        questionsNumber: questionList.length - 1,
      }),
    );

    animateProgress(currentQuestionIndex + 1);
  };

  return showNextButton ? (
    <TouchableOpacity onPress={handleNext} style={styles.nextButton}>
      <Text style={styles.nextButtonText}>Next</Text>
    </TouchableOpacity>
  ) : null;
};

export default NextButton;
