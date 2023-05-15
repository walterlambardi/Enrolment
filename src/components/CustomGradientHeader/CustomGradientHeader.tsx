import { useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { colors } from '../../themes';
import styles from './customGradientHeader.style';
import { ChevronLeft } from '../../themes/svgs';

interface ICustomGradientHeader {
  title: string;
}

const CustomGradientHeader = ({ title }: ICustomGradientHeader) => {
  const navigation = useNavigation();
  const handleBackPress = useCallback(() => navigation.goBack(), [navigation]);

  return (
    <View>
      <LinearGradient
        colors={[colors.lightPurple, colors.darkPurple]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.background}
        testID="linearGradient">
        <View style={styles.content}>
          <TouchableOpacity
            onPress={handleBackPress}
            style={styles.backButton}
            testID="backButton">
            <ChevronLeft />
          </TouchableOpacity>
          <Text style={styles.title}>{title}</Text>
        </View>
      </LinearGradient>
    </View>
  );
};

export default CustomGradientHeader;
