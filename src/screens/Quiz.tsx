import React, { useState } from 'react';
import {
  Animated,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import NextButton from '../components/NextButton';
import ProgressBar from '../components/ProgressBar';
import Question from '../components/Question';
import QuestionOptions from '../components/QuestionOptions';
import ResultsModal from '../components/ResultsModal';
import { COLORS, SIZES } from '../constants';
import data from '../data/quiz/es';

export interface IQuestion {
  id: number;
  question: string;
  options: string[];
  correct_option: string;
}

const Quiz: React.FC = () => {
  // const langugage = 'es';
  const allQuestions: IQuestion[] = data;
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentOptionSelected, setCurrentOptionSelected] = useState<string | null>(null);
  const [correctOption, setCorrectOption] = useState<string | null>(null);
  const [isOptionsDisabled, setIsOptionsDisabled] = useState(false);
  const [score, setScore] = useState(0);
  const [showNextButton, setShowNextButton] = useState(false);
  const [showScoreModal, setShowScoreModal] = useState(false);

  const animateProgress = (toValue: number) => {
    Animated.timing(progress, {
      toValue,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };

  const validateAnswer = (selectedOption: string) => {
    let correct_option = allQuestions[currentQuestionIndex].correct_option;
    setCurrentOptionSelected(selectedOption);
    setCorrectOption(correct_option);
    setIsOptionsDisabled(true);

    if (selectedOption === correct_option) {
      setScore(score + 1);
    }
    // Show Next Button
    setShowNextButton(true);
  };

  const handleNext = () => {
    if (currentQuestionIndex === allQuestions.length - 1) {
      // Last Question
      // Show Score Modal
      setShowScoreModal(true);
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setCurrentOptionSelected(null);
      setCorrectOption(null);
      setIsOptionsDisabled(false);
      setShowNextButton(false);
    }

    animateProgress(currentQuestionIndex + 1);
  };

  const restartQuiz = () => {
    setShowScoreModal(false);

    setCurrentQuestionIndex(0);
    setScore(0);

    setCurrentOptionSelected(null);
    setCorrectOption(null);
    setIsOptionsDisabled(false);
    setShowNextButton(false);

    animateProgress(0);
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [progress, setProgress] = useState(new Animated.Value(0));

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.primary} />
      <ScrollView>
        <View style={styles.container}>
          <ProgressBar progress={progress} questionsLength={allQuestions.length} />
          <Question allQuestions={allQuestions} currentQuestionIndex={currentQuestionIndex} />
          <QuestionOptions
            allQuestions={allQuestions}
            correctOption={correctOption}
            currentOptionSelected={currentOptionSelected}
            currentQuestionIndex={currentQuestionIndex}
            isOptionsDisabled={isOptionsDisabled}
            validateAnswer={validateAnswer}
          />
          <NextButton handleNext={handleNext} showNextButton={showNextButton} />
          <ResultsModal
            questionsLength={allQuestions.length}
            restartQuiz={restartQuiz}
            score={score}
            showScoreModal={showScoreModal}
          />
          <Image
            source={require('../assets/images/DottedBG.png')}
            style={styles.bottomBackgroundImage}
            resizeMode="contain"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingVertical: 40,
    paddingHorizontal: 16,
    backgroundColor: COLORS.background,
    position: 'relative',
    minHeight: '100%',
  },
  bottomBackgroundImage: {
    bottom: 0,
    height: 130,
    left: 0,
    opacity: 0.5,
    position: 'absolute',
    right: 0,
    width: SIZES.width,
    zIndex: -1,
  },
});

export default Quiz;
