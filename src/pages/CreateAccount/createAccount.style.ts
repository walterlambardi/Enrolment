import { StyleSheet } from 'react-native';
import metrics from '../../themes/metrics';
import colors from '../../themes/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  footerWrapper: {
    position: 'absolute',
    bottom: 30 * metrics.scaleCoefficient,
    left: 0,
    right: 0,
    paddingVertical: 16 * metrics.scaleCoefficient,
    paddingHorizontal: 30 * metrics.scaleCoefficient,
  },
  footerContainer: {
    flex: 1,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 12 * metrics.scaleCoefficient,
    lineHeight: 14 * metrics.scaleCoefficient,
    textAlign: 'center',
    color: colors.black,
    opacity: 0.4,
  },
  footerBtn: {
    marginTop: 20 * metrics.scaleCoefficient,
  },
});
