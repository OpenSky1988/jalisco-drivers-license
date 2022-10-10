import React, { useCallback, useRef } from 'react';
import { Animated, SafeAreaView, ScrollView, StatusBar, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useFocusEffect, useNavigation } from '@react-navigation/native';

import { DEVICE_STORE_KEYS } from '../../async-storage/deviceStoreKeys';
import NextButton from '../../components/NextButton';
import ProgressBar from '../../components/ProgressBar';
import Question from '../../components/Question';
import QuestionImage from '../../components/QuestionImage';
import QuestionOptions from '../../components/QuestionOptions';
import ResultsModal from '../../components/ResultsModal';
import { COLORS } from '../../constants';
import data from '../../data/quiz';
import { RootState } from '../../store';
import { nextQuestion, restartQuiz, setQuestions } from '../../store/slices/questions';
import styles from './styles';
import type { IQuestion, TNavigationProps } from './types';
import { questionsPrepper } from './utils';
import RNLanguageDetector from '@os-team/i18next-react-native-language-detector';

const getQuizLanguage = (OSlanguage: string): 'es' | 'en' => {
  switch (OSlanguage) {
    case 'es':
      return 'es';
    case 'en':
    default:
      return 'en';
  }
};

const Quiz: React.FC<TNavigationProps> = ({ route }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const progress = useRef(new Animated.Value(0));

  const { currentQuestionIndex, questionList } = useSelector((state: RootState) => state.questions);

  useFocusEffect(
    useCallback(() => {
      (async () => {
        const OSlanguage = RNLanguageDetector.detect() as string;
        const language = getQuizLanguage(OSlanguage);

        const quizType = route.params?.quizType as keyof typeof DEVICE_STORE_KEYS;
        const quizData = data[language];

        const preparedQuestions = await questionsPrepper(quizType)(quizData);
        dispatch(setQuestions(preparedQuestions as IQuestion[]));
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

  const handleFinish = () => navigation.navigate('Menu' as never);

  const handleRestart = () => {
    dispatch(restartQuiz());
    animateProgress(0);
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
          <ResultsModal
            handleFinish={handleFinish}
            handleRestart={handleRestart}
            quizType={route.params?.quizType}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Quiz;
