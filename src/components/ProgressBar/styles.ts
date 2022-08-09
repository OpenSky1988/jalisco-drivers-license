import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants';

const styles = StyleSheet.create({
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
});

export default styles;
