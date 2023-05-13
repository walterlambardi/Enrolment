import React, { useMemo } from 'react';
import { TouchableOpacity, Text, StyleProp, ViewStyle } from 'react-native';
import styles from './customButton.style';
import colors from '../../themes/colors';

type Props = {
  style?: StyleProp<ViewStyle>;
  onPress: () => void;
  title: string;
  color?: string;
  disabled?: boolean;
};

const CustomButton = ({
  style,
  onPress,
  title,
  color = colors.green,
  disabled = false,
}: Props) => {
  const buttonStyle = useMemo(
    () => [
      style,
      styles.button,
      { backgroundColor: color },
      disabled && styles.disabledButton,
    ],
    [style, color, disabled],
  );

  return (
    <TouchableOpacity
      style={buttonStyle}
      onPress={onPress}
      disabled={disabled}
      testID="custom-button">
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
