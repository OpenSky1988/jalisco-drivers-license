import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants';

const styles = StyleSheet.create({
  adContainer: {
    alignItems: 'flex-end',
    display: 'flex',
  },
  container: {
    flex: 1,
    paddingVertical: 40,
    paddingHorizontal: 16,
  },
  text: {
    marginBottom: 12,
  },
  setting: {
    marginBottom: 20,
  },

  // -------------------------------------
  loginButton: {
    display: 'flex',
    flexDirection: 'row',
    borderRadius: 20,
    marginVertical: 10,
    padding: 20,
    width: '100%',
  },
  loginButtonIcon: {
    // color: COLORS.white,
    height: 14,
  },
  loginButtonText: {
    color: COLORS.white,
    fontSize: 20,
    textAlign: 'center',
  },
});

export default styles;
