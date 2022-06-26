import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { COLORS } from '../constants';
import { IQuestion } from '../screens/Quiz';

interface IOptionButtonProps {
  correctOption: string | null;
  currentOptionSelected: string | null;
  isOptionsDisabled: boolean;
  option: string;
  validateAnswer: (option: string) => void;
}

const OptionButton: React.FC<IOptionButtonProps> = ({
  correctOption,
  currentOptionSelected,
  isOptionsDisabled,
  option,
  validateAnswer,
}) => {
  const isCorrect = option === correctOption;
  const isSelected = option === currentOptionSelected;

  const validate = () => validateAnswer(option);

  return (
    <TouchableOpacity
      onPress={validate}
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

interface IQuestionOptionsProps {
  allQuestions: IQuestion[];
  correctOption: string | null;
  currentOptionSelected: string | null;
  currentQuestionIndex: number;
  isOptionsDisabled: boolean;
  validateAnswer: (option: string) => void;
}

const QuestionOptions: React.FC<IQuestionOptionsProps> = ({
  allQuestions,
  correctOption,
  currentOptionSelected,
  currentQuestionIndex,
  isOptionsDisabled,
  validateAnswer,
}) => (
  <View>
    {allQuestions[currentQuestionIndex]?.options.map((option) => (
      <OptionButton
        correctOption={correctOption}
        currentOptionSelected={currentOptionSelected}
        isOptionsDisabled={isOptionsDisabled}
        key={option}
        option={option}
        validateAnswer={validateAnswer}
      />
    ))}
  </View>
);

const styles = StyleSheet.create({
  questionOption: {
    alignItems: 'center',
    borderRadius: 20,
    borderWidth: 3,
    flexDirection: 'row',
    minHeight: 60,
    justifyContent: 'space-between',
    marginVertical: 10,
    paddingHorizontal: 20,
  },
  questionOptionText: {
    color: COLORS.white,
    fontSize: 20,
  },
});

export default QuestionOptions;
