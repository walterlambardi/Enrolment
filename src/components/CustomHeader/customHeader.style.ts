import { StyleSheet } from 'react-native';
import metrics from '../../themes/metrics';
import { isiOS } from '../../utils/platformUtils';
import colors from '../../themes/colors';

export default StyleSheet.create({
  backgroundImage: {
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: 18 * metrics.scaleCoefficient,
    marginTop: isiOS ? metrics.getStatusBarHeight() : 0,
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    color: colors.white,
    textAlign: 'center',
    fontSize: 20 * metrics.scaleCoefficient,
    lineHeight: 23 * metrics.scaleCoefficient,
  },
  subtitle: {
    color: colors.white,
    textAlign: 'center',
    fontSize: 14 * metrics.scaleCoefficient,
    lineHeight: 16 * metrics.scaleCoefficient,
    paddingTop: 20 * metrics.scaleCoefficient,
  },
});
