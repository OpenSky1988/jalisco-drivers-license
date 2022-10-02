import React, { useEffect } from 'react';
import { Modal, Text, TouchableOpacity, View } from 'react-native';
import { useSelector } from 'react-redux';

import { DEVICE_STORE_KEYS } from '../../async-storage/deviceStoreKeys';
import { COLORS } from '../../constants';
import { RootState } from '../../store';
import styles from './styles';
import { IResultsModalProps } from './types';
import { calculateTestSuccess, updateSuccessfullAttemts } from './utils';

const ResultsModal: React.FC<IResultsModalProps> = ({ handleFinish, handleRestart, quizType }) => {
  const { questionList, score, showScoreModal } = useSelector(
    (state: RootState) => state.questions,
  );

  const isSuccessfull = calculateTestSuccess(score, questionList);

  useEffect(() => {
    (async () => {
      if (quizType && quizType !== DEVICE_STORE_KEYS.MISTAKES && isSuccessfull) {
        await updateSuccessfullAttemts(quizType);
      }
    })();
  }, [isSuccessfull, score, quizType]);

  return (
    <Modal animationType="slide" transparent={true} visible={showScoreModal}>
      <View style={styles.resultContainer}>
        <View style={styles.result}>
          <Text style={styles.resultTitle}>{isSuccessfull ? 'Congratulations!' : 'Oops!'}</Text>
          <View style={styles.resultRatio}>
            <Text
              style={[
                styles.resultCorrect,
                { color: isSuccessfull ? COLORS.success : COLORS.error },
              ]}
            >
              {score}
            </Text>
            <Text style={styles.resultTotal}>/ {questionList.length}</Text>
          </View>

          <TouchableOpacity onPress={handleRestart} style={styles.modalButton}>
            <Text style={styles.modalButtonText}>Retry Quiz</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleFinish} style={styles.modalButton}>
            <Text style={styles.modalButtonText}>Menu</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default ResultsModal;
