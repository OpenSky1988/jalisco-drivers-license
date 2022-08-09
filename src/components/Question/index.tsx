import React from 'react';
import { Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import styles from './styles';

const Question: React.FC = () => {
  const { currentQuestionIndex, questionList } = useSelector((state: RootState) => state.questions);

  return (
    <View style={styles.questionContainer}>
      <View style={styles.questionCounter}>
        <Text style={styles.questionCurrentIndex}>
          {`Question ${questionList[currentQuestionIndex]?.id}`}
        </Text>
        <Text style={styles.questionTotal}>
          {`${currentQuestionIndex + 1} / ${questionList.length}`}
        </Text>
      </View>
      <Text style={styles.questionText}>{questionList[currentQuestionIndex]?.question}</Text>
    </View>
  );
};

export default Question;
