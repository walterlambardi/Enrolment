import { StyleSheet } from 'react-native';
import { fonts, metrics, colors } from '../../themes';

export default StyleSheet.create({
  backgroundImage: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 18 * metrics.scaleCoefficient,
    marginTop: metrics.getStatusBarHeight(),
  },
  title: {
    color: colors.white,
    textAlign: 'center',
    fontSize: 20 * metrics.scaleCoefficient,
    lineHeight: 23 * metrics.scaleCoefficient,
    fontFamily: fonts.AVENIR_REGULAR,
    fontWeight: '900',
  },
  subtitle: {
    color: colors.white,
    textAlign: 'center',
    fontSize: 14 * metrics.scaleCoefficient,
    lineHeight: 18 * metrics.scaleCoefficient,
    paddingTop: 16 * metrics.scaleCoefficient,
    fontFamily: fonts.AVENIR_REGULAR,
    fontWeight: '600',
  },
});
