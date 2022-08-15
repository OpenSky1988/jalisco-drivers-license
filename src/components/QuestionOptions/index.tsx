import React from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';

import OptionButton from '../OptionButton';
import { RootState } from '../../store';
import { IQuestionOptionsProps } from './types';

const QuestionOptions: React.FC<IQuestionOptionsProps> = ({ handleNext }) => {
  const { currentQuestionIndex, questionList } = useSelector((state: RootState) => state.questions);

  return (
    <View>
      {questionList[currentQuestionIndex]?.options.map((option) => (
        <OptionButton handleNext={handleNext} key={option} option={option} />
      ))}
    </View>
  );
};

export default QuestionOptions;
