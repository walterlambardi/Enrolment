import { StyleSheet } from 'react-native';
import { colors, fonts, metrics } from '../../themes';

export default StyleSheet.create({
  background: {
    height: 80 * metrics.scaleCoefficient,
    justifyContent: 'center',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: metrics.getStatusBarHeight(),
  },
  backButton: {
    position: 'absolute',
    left: 20 * metrics.scaleCoefficient,
  },
  title: {
    color: colors.white,
    fontSize: 18 * metrics.scaleCoefficient,
    lineHeight: 23 * metrics.scaleCoefficient,
    fontWeight: 'bold',
    fontFamily: fonts.AVENIR_REGULAR,
  },
});
