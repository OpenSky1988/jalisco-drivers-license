import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { Layout, TopNavigation } from '@ui-kitten/components';
import React, { useCallback, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Animated, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { DEVICE_STORE_KEYS } from '../../async-storage/deviceStoreKeys';
import QuestionBanner from '../../components/AdMob/QuestionBanner';
import quizEndInterstitial, { onClose, onLoad } from '../../components/AdMob/QuizEndInterstitial';
import NextButton from '../../components/NextButton';
import ProgressBar from '../../components/ProgressBar';
import Question from '../../components/Question';
import { useBookmarked } from '../../components/Question/hooks';
import QuestionImage from '../../components/QuestionImage';
import QuestionOptions from '../../components/QuestionOptions';
import QuizPlaceholder from '../../components/QuizPlaceholder';
import ResultsModal from '../../components/ResultsModal';
import ThemedSafeAreaView from '../../components/ThemedSafeAreaView';
import { RootState } from '../../store';
import { nextQuestion, restartQuiz, setQuestions } from '../../store/slices/questions';
import { useBackAction } from '../../utils/hooks';
import { useBookmarkAction } from './hooks';
import styles from './styles';
import type { TNavigationProps } from './types';
import { animateProgress, setupQuiz } from './utils';

const Quiz: React.FC<TNavigationProps> = ({ route }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const progress = useRef(new Animated.Value(0));
  const { t } = useTranslation();

  const { currentQuestionIndex, questionList } = useSelector((state: RootState) => state.questions);
  const { language } = useSelector((state: RootState) => state.settings);

  const currentQuestionId = questionList[currentQuestionIndex]?.id;
  const isBookmarked = useBookmarked(currentQuestionId);
  const quizType = route.params?.quizType as keyof typeof DEVICE_STORE_KEYS;

  useFocusEffect(
    useCallback(() => {
      quizEndInterstitial.load();

      (async () => {
        const preparedQuestions = await setupQuiz(quizType, language);
        dispatch(setQuestions(preparedQuestions));
      })();

      return () => {
        dispatch(restartQuiz());
        dispatch(setQuestions([]));
      };
    }, [quizType, language, dispatch]),
  );

  const handleNext = () => {
    dispatch(
      nextQuestion({
        currentQuestionIndex,
        questionsNumber: questionList.length - 1,
      }),
    );
    animateProgress(progress.current, currentQuestionIndex + 1);
  };

  const handleRestart = async () => {
    const preparedQuestions = await setupQuiz(quizType, language);

    onLoad(() => quizEndInterstitial.show());

    onClose(() => {
      dispatch(setQuestions(preparedQuestions));
      dispatch(restartQuiz());
      animateProgress(progress.current, 0);
    });
  };

  const handleFinish = () => navigation.navigate('Menu' as never);

  const BookmarkAction = useBookmarkAction(currentQuestionId, isBookmarked);
  const BackAction = useBackAction();

  return (
    <ThemedSafeAreaView>
      <TopNavigation
        title={t(`routes.${route.params.title}.title`)}
        alignment="center"
        accessoryLeft={BackAction}
        accessoryRight={questionList.length ? BookmarkAction : undefined}
      />
      {questionList.length ? (
        <Layout style={styles.container}>
          <ScrollView>
            <Layout style={styles.quizContainer}>
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
          <QuestionBanner />
        </Layout>
      ) : (
        <QuizPlaceholder quizType={quizType} />
      )}
    </ThemedSafeAreaView>
  );
};

export default Quiz;
