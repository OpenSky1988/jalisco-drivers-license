import React from 'react';
import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { COLORS } from '../constants';

interface IProps {
  questionsLength: number;
  restartQuiz: () => void;
  score: number;
  showScoreModal: boolean;
}

const ResultsModal: React.FC<IProps> = ({
  questionsLength,
  restartQuiz,
  score,
  showScoreModal,
}) => {
  const isTestSuccessfull = score > questionsLength / 2;

  return (
    <Modal animationType="slide" transparent={true} visible={showScoreModal}>
      <View style={styles.resultContainer}>
        <View style={styles.result}>
          <Text style={styles.resultTitle}>{isTestSuccessfull ? 'Congratulations!' : 'Oops!'}</Text>
          <View style={styles.resultRatio}>
            <Text
              style={[
                styles.resultCorrect,
                {
                  color: isTestSuccessfull ? COLORS.success : COLORS.error,
                },
              ]}
            >
              {score}
            </Text>
            <Text style={styles.resultTotal}>/ {questionsLength}</Text>
          </View>

          <TouchableOpacity onPress={restartQuiz} style={styles.retryQuizButton}>
            <Text style={styles.retryQuizButtonText}>Retry Quiz</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
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
});

export default ResultsModal;
