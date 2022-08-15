import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 40,
    paddingHorizontal: 16,
    position: 'relative',
  },
  menuButton: {
    backgroundColor: COLORS.secondary,
    borderRadius: 16,
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginVertical: 10,
    padding: 30,
  },
  menuButtonTitle: {
    color: COLORS.white,
    fontSize: 20,
    marginBottom: 4,
  },
  menuButtonSubtitle: {
    color: COLORS.white,
    fontSize: 16,
  },
});

export default styles;
