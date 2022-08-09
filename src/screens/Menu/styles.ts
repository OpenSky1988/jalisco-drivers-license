import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 40,
    paddingHorizontal: 16,
    position: 'relative',
  },
  menuButton: {
    alignItems: 'center',
    borderRadius: 20,
    borderWidth: 3,
    flexDirection: 'row',
    height: 60,
    justifyContent: 'space-between',
    marginVertical: 10,
    paddingHorizontal: 20,
  },
  menuButtonText: {
    fontSize: 20,
  },
});

export default styles;
