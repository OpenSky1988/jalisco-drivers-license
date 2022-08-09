import React from 'react';
import { Modal, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { COLORS } from '../../constants';
import { RootState } from '../../store';
import { restartQuiz } from '../../store/slices/questions';
import styles from './styles';

const ResultsModal: React.FC = () => {
  const dispatch = useDispatch();
  const { questionList, score, showScoreModal } = useSelector(
    (state: RootState) => state.questions,
  );

  const isTestSuccessfull = score > questionList.length / 2;

  const restart = () => dispatch(restartQuiz());

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
            <Text style={styles.resultTotal}>/ {questionList.length}</Text>
          </View>

          <TouchableOpacity onPress={restart} style={styles.retryQuizButton}>
            <Text style={styles.retryQuizButtonText}>Retry Quiz</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default ResultsModal;
