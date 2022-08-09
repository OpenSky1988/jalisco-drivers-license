import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants';

const styles = StyleSheet.create({
  questionContainer: {
    marginVertical: 40,
  },
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
});

export default styles;
