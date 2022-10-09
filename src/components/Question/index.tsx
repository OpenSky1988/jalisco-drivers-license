import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { useSelector } from 'react-redux';

import { DEVICE_STORE_KEYS } from '../../async-storage/deviceStoreKeys';
import { increaseWrongAnswersInDeviceStorage } from '../../screens/Quiz/utils';
import { RootState } from '../../store';
import BookmarkButton from '../BookmarkButton';
import { useBookmarked, useCountdown } from './hooks';

import styles from './styles';
import { IQuestionProps } from './types';

const Question: React.FC<IQuestionProps> = ({ handleNext, quizType }) => {
  const navigation = useNavigation();
  const { currentQuestionIndex, questionList } = useSelector((state: RootState) => state.questions);

  const isMarathon = quizType === DEVICE_STORE_KEYS.MARATHON;
  const [countdown, setCountdown] = useCountdown(isMarathon);

  const currentQuestionId = questionList[currentQuestionIndex]?.id;
  const isBookmarked = useBookmarked(currentQuestionId);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <BookmarkButton currentQuestionId={currentQuestionId} isBookmarked={isBookmarked} />
      ),
    });
  }, [currentQuestionId, isBookmarked, navigation]);

  useEffect(() => {
    setCountdown(20);
  }, [currentQuestionId, setCountdown]);

  useEffect(() => {
    if (countdown === 0) {
      (async () => {
        await increaseWrongAnswersInDeviceStorage(currentQuestionId);
        handleNext();
        setCountdown(20);
      })();
    }
  }, [countdown, currentQuestionId, currentQuestionIndex, handleNext, questionList, setCountdown]);

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
