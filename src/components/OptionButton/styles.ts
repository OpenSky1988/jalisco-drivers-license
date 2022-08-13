import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants';

const styles = StyleSheet.create({
  questionOption: {
    alignItems: 'center',
    borderRadius: 12,
    flexDirection: 'row',
    minHeight: 60,
    justifyContent: 'space-between',
    marginVertical: 10,
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  questionOptionText: {
    color: COLORS.black,
    fontSize: 20,
  },
});

export default styles;
