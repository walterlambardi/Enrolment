import { StyleSheet } from 'react-native';
import { colors, fonts, metrics } from '../../themes';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20 * metrics.scaleCoefficient,
    backgroundColor: colors.white,
  },
  imagesContainer: {
    height: 52 * metrics.scaleCoefficient,
    alignItems: 'center',
    marginTop: 30 * metrics.scaleCoefficient,
    marginBottom: 54 * metrics.scaleCoefficient,
  },
  ilustration: {},
  flyingMoney: {
    position: 'absolute',
  },
  text: {
    fontFamily: fonts.AVENIR_REGULAR,
    fontSize: 14 * metrics.scaleCoefficient,
    lineHeight: 17 * metrics.scaleCoefficient,
    paddingBottom: 34 * metrics.scaleCoefficient,
    color: colors.black,
  },
});
