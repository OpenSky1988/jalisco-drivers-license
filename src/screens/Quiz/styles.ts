import { StyleSheet } from 'react-native';

import { COLORS, SIZES } from '../../constants';

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    backgroundColor: COLORS.white,
    flex: 1,
    paddingBottom: 40,
    paddingTop: 20,
    paddingHorizontal: 16,
    position: 'relative',
    minHeight: '100%',
  },
  bottomBackgroundImage: {
    bottom: 0,
    height: 130,
    left: 0,
    opacity: 0.5,
    position: 'absolute',
    right: 0,
    width: SIZES.width,
    zIndex: -1,
  },
});

export default styles;
