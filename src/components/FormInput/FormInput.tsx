import React, { MutableRefObject, ReactNode, useMemo } from 'react';
import { ReturnKeyTypeOptions, Text, TextInput, View } from 'react-native';
import styles from './formInput.style';
import { Controller } from 'react-hook-form';

export interface FormInputProps {
  forwardedRef: MutableRefObject<TextInput | null>;
  label: string;
  control: any;
  name: string;
  returnKeyType?: ReturnKeyTypeOptions;
  onSubmitEditing?: () => void;
  error?: Object;
  icon?: ReactNode;
  secureTextEntry?: boolean;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
}

const FormInput = ({
  forwardedRef,
  label,
  control,
  name,
  returnKeyType = 'next',
  onSubmitEditing,
  error,
  icon,
  secureTextEntry = false,
  autoCapitalize,
  ...props
}: FormInputProps) => {
  const handleEndEditing = () => {
    if (onSubmitEditing) {
      onSubmitEditing();
    }
  };

  const labelStyle = useMemo(
    () => [styles.labelContainer, icon ? styles.labelWithIcon : null],
    [icon],
  );

  return (
    <Controller
      control={control}
      render={({ field: { onChange, onBlur, value } }) => (
        <View style={styles.container}>
          <View style={labelStyle}>
            {value && <Text style={styles.label}>{label}</Text>}
          </View>
          <View
            style={[
              styles.inputContainer,
              value ? styles.valid : null,
              error ? styles.error : null,
            ]}>
            {icon && <View style={styles.iconContainer}>{icon}</View>}
            <TextInput
              testID="form-input"
              ref={forwardedRef}
              style={[styles.input, value && styles.withValue]}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder={label}
              onSubmitEditing={handleEndEditing}
              returnKeyType={returnKeyType}
              secureTextEntry={secureTextEntry}
              autoCapitalize={autoCapitalize}
              accessibilityLabel={`${label} input`}
              {...props}
            />
          </View>
        </View>
      )}
      name={name}
    />
  );
};

export default FormInput;
