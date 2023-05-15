import { StyleSheet } from 'react-native';
import { colors, fonts, metrics } from '../../themes';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    alignItems: 'center',
    marginTop: 70 * metrics.scaleCoefficient,
  },
  image: {
    width: 167 * metrics.scaleCoefficient,
    height: 156 * metrics.scaleCoefficient,
  },
  familyBank: {
    fontSize: 20 * metrics.scaleCoefficient,
    lineHeight: 23 * metrics.scaleCoefficient,
    textAlign: 'center',
    fontFamily: fonts.AVENIR_REGULAR,
    fontWeight: 'bold',
    color: colors.bluePurple,
    paddingTop: 25 * metrics.scaleCoefficient,
  },
  description: {
    paddingTop: 52 * metrics.scaleCoefficient,
    paddingHorizontal: 28 * metrics.scaleCoefficient,
    fontSize: 14 * metrics.scaleCoefficient,
    lineHeight: 19 * metrics.scaleCoefficient,
    textAlign: 'center',
    color: colors.black,
    fontFamily: fonts.AVENIR_REGULAR,
  },
  footerWrapper: {
    position: 'absolute',
    bottom: 20 * metrics.scaleCoefficient,
    left: 0,
    right: 0,
    paddingHorizontal: 20 * metrics.scaleCoefficient,
  },
  footerContainer: {
    flex: 1,
    alignItems: 'center',
  },
  footerBtn: {
    marginTop: 20 * metrics.scaleCoefficient,
    width: 340 * metrics.scaleCoefficient,
  },
});
