import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants';

const styles = StyleSheet.create({
  questionOption: {
    alignItems: 'center',
    borderRadius: 20,
    borderWidth: 3,
    flexDirection: 'row',
    minHeight: 60,
    justifyContent: 'space-between',
    marginVertical: 10,
    paddingHorizontal: 20,
  },
  questionOptionText: {
    color: COLORS.white,
    fontSize: 20,
  },
});

export default styles;
