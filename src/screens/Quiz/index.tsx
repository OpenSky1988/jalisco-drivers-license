import React, { useCallback, useRef } from 'react';
import { Animated, SafeAreaView, ScrollView, StatusBar, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useFocusEffect } from '@react-navigation/native';

import { DEVICE_STORE_KEYS } from '../../async-storage/deviceStoreKeys';
import NextButton from '../../components/NextButton';
import ProgressBar from '../../components/ProgressBar';
import Question from '../../components/Question';
import QuestionImage from '../../components/QuestionImage';
import QuestionOptions from '../../components/QuestionOptions';
import ResultsModal from '../../components/ResultsModal';
import { COLORS } from '../../constants';
import data from '../../data/quiz/en';
import { RootState } from '../../store';
import { nextQuestion, restartQuiz, setQuestions } from '../../store/slices/questions';
import { shuffleArray } from '../../utils';
import styles from './styles';
import type { IQuestion, TNavigationProps } from './types';
import { filterFavorites, filterMistakes } from './utils';

const questionsOrganizer = {
  [DEVICE_STORE_KEYS.FAVORITES]: async (questionsData: IQuestion[]) => {
    const filteredFavorites = await filterFavorites(questionsData);
    return shuffleArray(filteredFavorites);
  },
  [DEVICE_STORE_KEYS.MARATHON]: (questionsData: IQuestion[]) => questionsData,
  [DEVICE_STORE_KEYS.MISTAKES]: async (questionsData: IQuestion[]) => {
    const filteredMistakes = await filterMistakes(questionsData);
    return shuffleArray(filteredMistakes);
  },
  [DEVICE_STORE_KEYS.ORDERED]: (questionsData: IQuestion[]) => questionsData,
  [DEVICE_STORE_KEYS.RANDOMIZED]: (questionsData: IQuestion[]) => shuffleArray(questionsData),
};

const Quiz: React.FC<TNavigationProps> = ({ route }) => {
  const dispatch = useDispatch();
  const progress = useRef(new Animated.Value(0));

  const { currentQuestionIndex, questionList } = useSelector((state: RootState) => state.questions);
  // const langugage = 'es';

  useFocusEffect(
    useCallback(() => {
      (async () => {
        const organizedQuestions = await questionsOrganizer[route.params?.quizType as string](data);
        dispatch(setQuestions(organizedQuestions as IQuestion[]));
      })();

      return () => {
        dispatch(restartQuiz());
        dispatch(setQuestions([]));
      };
    }, [route.params?.quizType, dispatch]),
  );

  const animateProgress = (toValue: number) => {
    Animated.timing(progress.current, {
      toValue,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };

  const handleNext = () => {
    dispatch(
      nextQuestion({
        currentQuestionIndex,
        questionsNumber: questionList.length - 1,
      }),
    );

    animateProgress(currentQuestionIndex + 1);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.primary} />
      <ScrollView>
        <View style={styles.container}>
          <ProgressBar progress={progress.current} />
          <QuestionImage />
          <Question handleNext={handleNext} quizType={route.params?.quizType} />
          <QuestionOptions handleNext={handleNext} />
          <NextButton handleNext={handleNext} />
          <ResultsModal quizType={route.params?.quizType} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Quiz;
