import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import { COLORS } from '../../constants';
import {
  decreaseWrongAnswersInDeviceStorage,
  increaseWrongAnswersInDeviceStorage,
} from '../../screens/Quiz/utils';
import { RootState } from '../../store';
import { updateAnswer } from '../../store/slices/questions';
import styles from './styles';
import { IOptionButtonProps } from './types';

const OptionButton: React.FC<IOptionButtonProps> = ({ handleNext, option }) => {
  const dispatch = useDispatch();
  const {
    correctOption,
    currentOptionSelected,
    currentQuestionIndex,
    isOptionsDisabled,
    questionList,
  } = useSelector((state: RootState) => state.questions);

  const isCorrect = option === correctOption;
  const isSelected = option === currentOptionSelected;

  const backgroundColor = isCorrect ? COLORS.success : isSelected ? COLORS.error : COLORS.secondary;
  const textColor = isCorrect ? COLORS.white : isSelected ? COLORS.white : COLORS.black;

  const validateAnswer = async () => {
    const { correct_option, id } = questionList[currentQuestionIndex];

    dispatch(updateAnswer({ correctOption: correct_option, selectedOption: option }));

    if (correct_option === option) {
      await decreaseWrongAnswersInDeviceStorage(id);
      setTimeout(handleNext, 200);
    } else {
      await increaseWrongAnswersInDeviceStorage(id);
    }
  };

  return (
    <TouchableOpacity
      onPress={validateAnswer}
      disabled={isOptionsDisabled}
      key={option}
      style={[styles.questionOption, { backgroundColor }]}
    >
      <Text style={[styles.questionOptionText, { color: textColor }]}>{option}</Text>
    </TouchableOpacity>
  );
};

export default OptionButton;
