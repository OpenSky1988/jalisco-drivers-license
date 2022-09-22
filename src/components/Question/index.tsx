import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { DEVICE_STORE_KEYS } from '../../async-storage/deviceStoreKeys';
import { increaseWrongAnswersInDeviceStorage } from '../../screens/Quiz/utils';

import { RootState } from '../../store';

import styles from './styles';
import { IQuestionProps } from './types';

const Question: React.FC<IQuestionProps> = ({ handleNext, quizType }) => {
  const { currentQuestionIndex, questionList } = useSelector((state: RootState) => state.questions);
  const [countdown, setCountdown] = useState(20);

  const isMarathon = quizType === DEVICE_STORE_KEYS.MARATHON;

  useEffect(() => {
    if (isMarathon) {
      const interval = setInterval(() => setCountdown((prevCountdown) => prevCountdown - 1), 1000);

      return () => clearInterval(interval);
    }
  }, [isMarathon, quizType]);

  useEffect(() => {
    if (countdown === 0) {
      (async () => {
        await increaseWrongAnswersInDeviceStorage(questionList[currentQuestionIndex]?.id);
        handleNext();
        setCountdown(20);
      })();
    }
  }, [countdown, currentQuestionIndex, handleNext, questionList]);

  return (
    <View style={styles.questionContainer}>
      <View style={styles.questionCounter}>
        <Text style={styles.questionCurrentIndex}>
          {`Question ${questionList[currentQuestionIndex]?.id}`}
        </Text>
        {isMarathon && (
          <View style={styles.countdownContainer}>
            <Text style={styles.countdown}>{countdown}</Text>
          </View>
        )}
        <Text style={styles.questionTotal}>
          {`${currentQuestionIndex + 1} / ${questionList.length}`}
        </Text>
      </View>
      <Text style={styles.questionText}>{questionList[currentQuestionIndex]?.question}</Text>
    </View>
  );
};

export default Question;
