import { StyleSheet } from 'react-native';
import { fonts, metrics, colors } from '../../themes';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  formContainer: {
    marginTop: 33 * metrics.scaleCoefficient,
  },
  footerWrapper: {
    position: 'absolute',
    bottom: 20 * metrics.scaleCoefficient,
    left: 0,
    right: 0,
    paddingVertical: 16 * metrics.scaleCoefficient,
    paddingHorizontal: 20 * metrics.scaleCoefficient,
  },
  footerContainer: {
    flex: 1,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 12 * metrics.scaleCoefficient,
    lineHeight: 14 * metrics.scaleCoefficient,
    textAlign: 'center',
    color: colors.gray,
    fontFamily: fonts.AVENIR_REGULAR,
  },
  footerTextTermsOfService: {
    color: colors.inputText,
    fontSize: 12 * metrics.scaleCoefficient,
    lineHeight: 14 * metrics.scaleCoefficient,
    textAlign: 'center',
    fontFamily: fonts.AVENIR_REGULAR,
    fontWeight: '600',
  },
  footerBtn: {
    marginTop: 20 * metrics.scaleCoefficient,
  },
});
