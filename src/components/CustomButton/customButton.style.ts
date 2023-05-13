import { StyleSheet } from 'react-native';
import metrics from '../../themes/metrics';
import colors from '../../themes/colors';

export default StyleSheet.create({
  button: {
    borderRadius: 5 * metrics.scaleCoefficient,
    backgroundColor: colors.green,
    width: 256 * metrics.scaleCoefficient,
    height: 50 * metrics.scaleCoefficient,
    justifyContent: 'center',
  },
  buttonText: {
    color: colors.white,
    fontSize: 12 * metrics.scaleCoefficient,
    lineHeight: 14 * metrics.scaleCoefficient,
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: 1 * metrics.scaleCoefficient,
  },
  disabledButton: {
    opacity: 0.5,
  },
});