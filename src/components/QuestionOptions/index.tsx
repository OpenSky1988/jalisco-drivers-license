import React from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';

import OptionButton from '../OptionButton';
import { RootState } from '../../store';

const QuestionOptions: React.FC = () => {
  const { currentQuestionIndex, questionList } = useSelector((state: RootState) => state.questions);

  return (
    <View>
      {questionList[currentQuestionIndex]?.options.map((option) => (
        <OptionButton key={option} option={option} />
      ))}
    </View>
  );
};

export default QuestionOptions;
