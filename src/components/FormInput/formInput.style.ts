import { StyleSheet } from 'react-native';
import { isiOS } from '../../utils/platformUtils';
import { fonts, metrics, colors } from '../../themes';

export default StyleSheet.create({
  container: {
    marginBottom: 14 * metrics.scaleCoefficient,
    marginHorizontal: 38 * metrics.scaleCoefficient,
  },
  inputContainer: {
    flexDirection: 'row',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.lightGray,
    height: 52 * metrics.scaleCoefficient,
  },

  input: {
    flex: 1,
    color: colors.inputText,
    fontSize: 14 * metrics.scaleCoefficient,
    fontWeight: '700',
    fontFamily: fonts.AVENIR_REGULAR,
  },
  withValue: {
    color: colors.inputText,
  },
  iconContainer: {
    paddingTop: 16 * metrics.scaleCoefficient,
    width: 28 * metrics.scaleCoefficient,
  },
  error: {
    borderBottomColor: colors.red,
  },
  valid: {
    borderBottomColor: colors.inputText,
  },
  label: {
    fontSize: 10 * metrics.scaleCoefficient,
    lineHeight: 12 * metrics.scaleCoefficient,
    fontFamily: fonts.AVENIR_REGULAR,
    color: colors.placeholder,
    fontWeight: '700',
  },
  labelContainer: {
    height: 10 * metrics.scaleCoefficient,
    position: 'absolute',
    top: 0,
    left: 0,
  },
  labelWithIcon: {
    paddingLeft: isiOS
      ? 28 * metrics.scaleCoefficient
      : 32 * metrics.scaleCoefficient,
  },
});
