import React, {useState} from 'react';
import {
  Animated,
  Image,
  Modal,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {COLORS, SIZES} from '../constants';
import data from '../data/quiz/es';

const Quiz = () => {
  const langugage = 'es';
  const allQuestions = data;
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentOptionSelected, setCurrentOptionSelected] = useState<string | null>(null);
  const [correctOption, setCorrectOption] = useState<string | null>(null);
  const [isOptionsDisabled, setIsOptionsDisabled] = useState(false);
  const [score, setScore] = useState(0);
  const [showNextButton, setShowNextButton] = useState(false);
  const [showScoreModal, setShowScoreModal] = useState(false);

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
    Animated.timing(progress, {
      toValue: currentQuestionIndex + 1,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };

  const restartQuiz = () => {
    setShowScoreModal(false);

    setCurrentQuestionIndex(0);
    setScore(0);

    setCurrentOptionSelected(null);
    setCorrectOption(null);
    setIsOptionsDisabled(false);
    setShowNextButton(false);

    Animated.timing(progress, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };

  const renderQuestion = () => (
    <View style={styles.questionContainer}>
      <View style={styles.questionCounter}>
        <Text style={styles.questionCurrentIndex}>
          {currentQuestionIndex + 1}
        </Text>
        <Text style={styles.questionTotal}>/ {allQuestions.length}</Text>
      </View>
      <Text style={styles.questionText}>
        {allQuestions[currentQuestionIndex]?.question}
      </Text>
    </View>
  );

  const renderOptions = () => (
    <View>
      {allQuestions[currentQuestionIndex]?.options.map((option: string) => (
        <TouchableOpacity
          onPress={() => validateAnswer(option)}
          disabled={isOptionsDisabled}
          key={option}
          style={[
            styles.questionOption,
            {
              borderColor: option === correctOption
                ? COLORS.success
                : option === currentOptionSelected
                  ? COLORS.error
                  : COLORS.secondary + '40',
              backgroundColor: option === correctOption
                ? COLORS.success + '20'
                : option === currentOptionSelected
                  ? COLORS.error + '20'
                  : COLORS.secondary + '20',
            },
          ]}
        >
          <Text style={styles.questionOptionText}>{option}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );

  const renderNextButton = () => {
    return showNextButton ? (
      <TouchableOpacity onPress={handleNext} style={styles.nextButton}>
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
    ) : null;
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [progress, setProgress] = useState(new Animated.Value(0));

  const progressAnim = progress.interpolate({
    inputRange: [0, allQuestions.length],
    outputRange: ['0%', '100%'],
  });

  const renderProgressBar = () => (
    <View style={styles.progressBarContainer}>
      <Animated.View style={[styles.progressBar, {width: progressAnim}]} />
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.primary} />
      <View style={styles.container}>
        {renderProgressBar()}
        {renderQuestion()}
        {renderOptions()}
        {renderNextButton()}

        <Modal
          animationType="slide"
          transparent={true}
          visible={showScoreModal}
        >
          <View style={styles.resultContainer}>
            <View style={styles.result}>
              <Text style={styles.resultTitle}>
                {score > allQuestions.length / 2 ? 'Congratulations!' : 'Oops!'}
              </Text>
              <View style={styles.resultRatio}>
                <Text
                  style={[
                    styles.resultCorrect,
                    {
                      color:
                        score > allQuestions.length / 2
                          ? COLORS.success
                          : COLORS.error,
                    },
                  ]}
                >
                  {score}
                </Text>
                <Text style={styles.resultTotal}>/ {allQuestions.length}</Text>
              </View>

              <TouchableOpacity
                onPress={restartQuiz}
                style={styles.retryQuizButton}
              >
                <Text style={styles.retryQuizButtonText}>Retry Quiz</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        <Image
          source={require('../assets/images/DottedBG.png')}
          style={styles.bottomBackgroundImage}
          resizeMode="contain"
        />
      </View>
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
  },

  // -------------------------------------
  questionContainer: {
    marginVertical: 40,
  },

  // -------------------------------------
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

  // -------------------------------------
  questionOption: {
    alignItems: 'center',
    borderRadius: 20,
    borderWidth: 3,
    flexDirection: 'row',
    height: 60,
    justifyContent: 'space-between',
    marginVertical: 10,
    paddingHorizontal: 20,
  },
  questionOptionText: {
    color: COLORS.white,
    fontSize: 20,
  },

  // -------------------------------------
  nextButton: {
    backgroundColor: COLORS.accent,
    borderRadius: 5,
    marginTop: 20,
    padding: 20,
    width: '100%',
  },
  nextButtonText: {
    color: COLORS.white,
    fontSize: 20,
    textAlign: 'center',
  },

  // -------------------------------------
  progressBarContainer: {
    backgroundColor: '#00000020',
    borderRadius: 20,
    height: 20,
    width: '100%',
  },
  progressBar: {
    backgroundColor: COLORS.accent,
    borderRadius: 20,
    height: 20,
  },

  // -------------------------------------
  retryQuizButton: {
    backgroundColor: COLORS.accent,
    borderRadius: 20,
    padding: 20,
    width: '100%',
  },
  retryQuizButtonText: {
    color: COLORS.white,
    fontSize: 20,
    textAlign: 'center',
  },

  // -------------------------------------
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

  // -------------------------------------
  resultContainer: {
    flex: 1,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  result: {
    backgroundColor: COLORS.white,
    width: '90%',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
  },
  resultTitle: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  resultRatio: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginVertical: 20,
  },
  resultCorrect: {
    fontSize: 30,
  },
  resultTotal: {
    fontSize: 20,
    color: COLORS.black,
  },
});

export default Quiz;
