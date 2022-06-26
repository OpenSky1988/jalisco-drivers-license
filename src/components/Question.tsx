import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { COLORS } from '../constants';
import type { IQuestion } from '../screens/Quiz';

interface IProps {
  allQuestions: IQuestion[];
  currentQuestionIndex: number;
}

const Question: React.FC<IProps> = ({ allQuestions, currentQuestionIndex }) => (
  <View style={styles.questionContainer}>
    <View style={styles.questionCounter}>
      <Text style={styles.questionCurrentIndex}>{currentQuestionIndex + 1}</Text>
      <Text style={styles.questionTotal}>/ {allQuestions.length}</Text>
    </View>
    <Text style={styles.questionText}>{allQuestions[currentQuestionIndex]?.question}</Text>
  </View>
);

const styles = StyleSheet.create({
  questionContainer: {
    marginVertical: 40,
  },
  questionCounter: {
    alignItems: 'flex-end',
    flexDirection: 'row',
  },
  questionCurrentIndex: {
    color: COLORS.white,
    fontSize: 20,
    marginRight: 2,
    opacity: 0.6,
  },
  questionTotal: {
    color: COLORS.white,
    fontSize: 18,
    opacity: 0.6,
  },
  questionText: {
    color: COLORS.white,
    fontSize: 30,
  },
});

export default Question;
