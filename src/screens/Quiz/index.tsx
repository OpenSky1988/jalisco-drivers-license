import React, { useCallback, useRef } from 'react';
import { Animated, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import RNLanguageDetector from '@os-team/i18next-react-native-language-detector';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { Layout, TopNavigation } from '@ui-kitten/components';

import { DEVICE_STORE_KEYS } from '../../async-storage/deviceStoreKeys';
import NextButton from '../../components/NextButton';
import ProgressBar from '../../components/ProgressBar';
import Question from '../../components/Question';
import { useBookmarked } from '../../components/Question/hooks';
import QuestionImage from '../../components/QuestionImage';
import QuestionOptions from '../../components/QuestionOptions';
import ResultsModal from '../../components/ResultsModal';
import ThemedSafeAreaView from '../../components/ThemedSafeAreaView';
import data from '../../data/quiz';
import { RootState } from '../../store';
import { nextQuestion, restartQuiz, setQuestions } from '../../store/slices/questions';
import { useBackAction, useBookmarkAction } from './hooks';
import styles from './styles';
import type { IQuestion, TNavigationProps } from './types';
import { getQuizLanguage, questionsPrepper } from './utils';

const Quiz: React.FC<TNavigationProps> = ({ route }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const progress = useRef(new Animated.Value(0));

  const { currentQuestionIndex, questionList } = useSelector((state: RootState) => state.questions);

  const currentQuestionId = questionList[currentQuestionIndex]?.id;
  const isBookmarked = useBookmarked(currentQuestionId);

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

  const BookmarkAction = useBookmarkAction(currentQuestionId, isBookmarked);
  const BackAction = useBackAction();

  return (
    <ThemedSafeAreaView>
      <TopNavigation
        title={route.params.title}
        alignment="center"
        accessoryLeft={BackAction}
        accessoryRight={BookmarkAction}
      />
      <ScrollView>
        <Layout style={styles.container}>
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
        </Layout>
      </ScrollView>
    </ThemedSafeAreaView>
  );
};

export default Quiz;
