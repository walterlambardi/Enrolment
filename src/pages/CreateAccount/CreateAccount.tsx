import { Text, TextInput, View } from 'react-native';
import React, { useCallback, useRef, useState } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParams } from '../../navigation';
import { Pages } from '../../enums/Pages';
import CustomHeader from '../../components/CustomHeader';
import styles from './createAccount.style';
import CustomButton from '../../components/CustomButton';
import FormInput from '../../components/FormInput';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { formDataSchema } from '../../utils/yupSchema';
import { Email, Name, Password } from '../../themes/svgs';
import { getLocalizedString } from '../../utils/localizedUtils';
import { submitFormData } from '../../api/apiService';

const localizedCopy = (value: string) =>
  getLocalizedString(`${Pages.CREATE_ACCOUNT}.${value}`);

export type CreateAccountProps = NativeStackScreenProps<
  RootStackParams,
  Pages.CREATE_ACCOUNT
>;

export interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const CreateAccount = ({ navigation }: CreateAccountProps) => {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({
    mode: 'onBlur',
    resolver: yupResolver(formDataSchema),
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const firstNameRef = useRef<TextInput>(null);
  const lastNameRef = useRef<TextInput>(null);
  const emailRef = useRef<TextInput>(null);
  const passwordRef = useRef<TextInput>(null);

  const goToTermsOfService = useCallback(
    () => navigation.navigate(Pages.TERMS_OF_SERVICE),
    [navigation],
  );

  const goToLinkYourBank = useCallback(
    () =>
      navigation.reset({
        index: 0,
        routes: [{ name: Pages.LINK_BANK }],
      }),
    [navigation],
  );

  const onSubmit = async (data: FormData) => {
    if (isSubmitting) {
      return;
    }
    setIsSubmitting(true);
    try {
      const response = await submitFormData(data);
      if (response?.status === '200') {
        goToLinkYourBank();
      }
    } catch (error) {
      // Handle error
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <View style={styles.container}>
      <CustomHeader
        title={localizedCopy('title')}
        subtitle={localizedCopy('subtitle')}
      />

      <View style={styles.formContainer}>
        <FormInput
          forwardedRef={firstNameRef}
          label={localizedCopy('firstName')}
          control={control}
          name="firstName"
          onSubmitEditing={() => lastNameRef.current?.focus()}
          error={errors.firstName}
          icon={<Name />}
          autoCapitalize="words"
        />

        <FormInput
          forwardedRef={lastNameRef}
          label={localizedCopy('lastName')}
          control={control}
          name="lastName"
          onSubmitEditing={() => emailRef.current?.focus()}
          error={errors.lastName}
          icon={<Name />}
          autoCapitalize="words"
        />

        <FormInput
          forwardedRef={emailRef}
          label={localizedCopy('email')}
          control={control}
          name="email"
          onSubmitEditing={() => passwordRef.current?.focus()}
          error={errors.email}
          icon={<Email />}
          autoCapitalize="none"
        />

        <FormInput
          forwardedRef={passwordRef}
          label={localizedCopy('password')}
          control={control}
          name="password"
          returnKeyType="done"
          error={errors.password}
          secureTextEntry={true}
          icon={<Password />}
          autoCapitalize="none"
          onSubmitEditing={isValid ? handleSubmit(onSubmit) : undefined}
        />
      </View>

      <View style={styles.footerWrapper}>
        <View style={styles.footerContainer}>
          <Text style={styles.footerText}>
            {localizedCopy('footer')}
            <Text
              style={styles.footerTextTermsOfService}
              onPress={goToTermsOfService}>
              {localizedCopy('termsOfService')}
            </Text>
          </Text>
          <CustomButton
            title={localizedCopy('btnCta')}
            disabled={!isValid}
            onPress={handleSubmit(onSubmit)}
            style={styles.footerBtn}
          />
        </View>
      </View>
    </View>
  );
};

export default CreateAccount;
