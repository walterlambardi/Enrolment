import React from 'react';
import { FallbackProps } from 'react-error-boundary';
import { View, Text, Button } from 'react-native';
import styles from './customFallback.style';
import { getLocalizedString } from '../../utils/localizedUtils';

const localizedCopy = (value: string) =>
  getLocalizedString(`global.customFallback.${value}`);

const CustomFallback = ({ error, resetErrorBoundary }: FallbackProps) => {
  return (
    <View style={styles.container}>
      <Text>{localizedCopy('message')}</Text>
      <Text>{error.message}</Text>
      <Button
        onPress={() => resetErrorBoundary()}
        title={localizedCopy('btnCta')}
      />
    </View>
  );
};

export default CustomFallback;
