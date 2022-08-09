import React, { useCallback, useRef } from 'react';
import { Animated, SafeAreaView, ScrollView, StatusBar, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { useFocusEffect } from '@react-navigation/native';

import NextButton from '../../components/NextButton';
import ProgressBar from '../../components/ProgressBar';
import Question from '../../components/Question';
import QuestionImage from '../../components/QuestionImage';
import QuestionOptions from '../../components/QuestionOptions';
import ResultsModal from '../../components/ResultsModal';
import { COLORS } from '../../constants';
import data from '../../data/quiz/en';
import { restartQuiz, setQuestions } from '../../store/slices/questions';
import { shuffleArray } from '../../utils';
import styles from './styles';
import type { IQuestion, TNavigationProps } from './types';
import { get } from '../../async-storage';
import { DEVICE_STORE_KEYS } from '../../async-storage/deviceStoreKeys';

const filterMistakes = async (questions: IQuestion[]): Promise<IQuestion[]> => {
  const wrongAnswers = await get(DEVICE_STORE_KEYS.WRONG_ANSWERS);
  const wrongAnswersKeys = Object.keys(wrongAnswers);

  const filteredMistakes = questions.filter((question) =>
    wrongAnswersKeys.includes(`${question.id}`),
  );

  return filteredMistakes;
};

const Quiz: React.FC<TNavigationProps> = ({ route }) => {
  const dispatch = useDispatch();
  const progress = useRef(new Animated.Value(0));
  // const langugage = 'es';

  useFocusEffect(
    useCallback(() => {
      (async () => {
        if (route.params?.isRandom) {
          dispatch(setQuestions(shuffleArray(data) as IQuestion[]));
        } else if (route.params?.isWrongAnswers) {
          const filteredMistakes = await filterMistakes(data);
          dispatch(setQuestions(shuffleArray(filteredMistakes) as IQuestion[]));
        } else {
          dispatch(setQuestions(data));
        }
      })();

      return () => {
        dispatch(restartQuiz());
        dispatch(setQuestions([]));
      };
    }, [route.params?.isRandom, route.params?.isWrongAnswers, dispatch]),
  );

  const animateProgress = (toValue: number) => {
    Animated.timing(progress.current, {
      toValue,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.primary} />
      <ScrollView>
        <View style={styles.container}>
          <ProgressBar progress={progress.current} />
          <QuestionImage />
          <Question />
          <QuestionOptions />
          <NextButton animateProgress={animateProgress} />
          <ResultsModal />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Quiz;
