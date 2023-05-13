import React from 'react';
import { View, ImageBackground, StatusBar, Text } from 'react-native';
import styles from './customHeader.style';
import images from '../../themes/images';
import metrics from '../../themes/metrics';

interface CustomHeaderProps {
  title: string;
  subtitle?: string;
}

const CustomHeader = ({ title, subtitle }: CustomHeaderProps) => {
  const hasSubtitle = Boolean(subtitle);
  const headerHeight =
    (hasSubtitle ? 150 : 80) * metrics.scaleCoefficient +
    metrics.getStatusBarHeight();

  return (
    <View style={{ height: headerHeight }}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={'transparent'}
        translucent={true}
      />
      <ImageBackground
        source={images.HEADER_BACKGROUND}
        style={styles.backgroundImage}
        resizeMode="cover">
        <View style={styles.contentContainer}>
          <Text style={styles.title}>{title}</Text>
          {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
        </View>
      </ImageBackground>
    </View>
  );
};

export default CustomHeader;
