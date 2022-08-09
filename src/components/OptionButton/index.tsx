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

const OptionButton: React.FC<IOptionButtonProps> = ({ option }) => {
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

  const validateAnswer = async () => {
    const { correct_option, id } = questionList[currentQuestionIndex];

    dispatch(updateAnswer({ correctOption: correct_option, selectedOption: option }));

    if (correct_option === option) {
      await decreaseWrongAnswersInDeviceStorage(id);
    } else {
      await increaseWrongAnswersInDeviceStorage(id);
    }
  };

  return (
    <TouchableOpacity
      onPress={validateAnswer}
      disabled={isOptionsDisabled}
      key={option}
      style={[
        styles.questionOption,
        {
          borderColor: isCorrect
            ? COLORS.success
            : isSelected
              ? COLORS.error
              : COLORS.secondary + '40',
          backgroundColor: isCorrect
            ? COLORS.success + '20'
            : isSelected
              ? COLORS.error + '20'
              : COLORS.secondary + '20',
        },
      ]}
    >
      <Text style={styles.questionOptionText}>{option}</Text>
    </TouchableOpacity>
  );
};

export default OptionButton;
