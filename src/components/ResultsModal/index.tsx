import React, { useEffect } from 'react';
import { Modal, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { DEVICE_STORE_KEYS } from '../../async-storage/deviceStoreKeys';
import { COLORS } from '../../constants';
import { RootState } from '../../store';
import { restartQuiz } from '../../store/slices/questions';
import styles from './styles';
import { IResultsModalProps } from './types';
import { calculateTestSuccess, updateSuccessfullAttemts } from './utils';

const ResultsModal: React.FC<IResultsModalProps> = ({ testTypeKey }) => {
  const dispatch = useDispatch();
  const { questionList, score, showScoreModal } = useSelector(
    (state: RootState) => state.questions,
  );

  const isSuccessfull = calculateTestSuccess(score, questionList);

  useEffect(() => {
    (async () => {
      if (testTypeKey && testTypeKey !== DEVICE_STORE_KEYS.MISTAKES && isSuccessfull) {
        await updateSuccessfullAttemts(testTypeKey);
      }
    })();
  }, [isSuccessfull, score, testTypeKey]);

  const restart = () => dispatch(restartQuiz());

  return (
    <Modal animationType="slide" transparent={true} visible={showScoreModal}>
      <View style={styles.resultContainer}>
        <View style={styles.result}>
          <Text style={styles.resultTitle}>{isSuccessfull ? 'Congratulations!' : 'Oops!'}</Text>
          <View style={styles.resultRatio}>
            <Text
              style={[
                styles.resultCorrect,
                {
                  color: isSuccessfull ? COLORS.success : COLORS.error,
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
