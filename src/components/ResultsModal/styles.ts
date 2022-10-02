import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants';

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
  modalButton: {
    backgroundColor: COLORS.accent,
    borderRadius: 20,
    marginVertical: 10,
    padding: 20,
    width: '100%',
  },
  modalButtonText: {
    color: COLORS.white,
    fontSize: 20,
    textAlign: 'center',
  },
});

export default styles;
