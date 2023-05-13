import { Text, View } from 'react-native';
import React, { useCallback } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParams } from '../../navigation';
import { Pages } from '../../enums/Pages';
import CustomHeader from '../../components/CustomHeader';
import styles from './createAccount.style';
import CustomButton from '../../components/CustomButton';

type CreateAccountProps = NativeStackScreenProps<
  RootStackParams,
  Pages.CREATE_ACCOUNT
>;

const CreateAccount = ({ navigation }: CreateAccountProps) => {
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

  return (
    <View style={styles.container}>
      <CustomHeader
        title={'Create Your Account'}
        subtitle={
          'You can be a parent, godparent, grandparent or even a favorite aunt. We’ll add the kids after!'
        }
      />

      {/** Form Here */}

      <View style={styles.footerWrapper}>
        <View style={styles.footerContainer}>
          <Text style={styles.footerText} onPress={goToTermsOfService}>
            {
              'By creating this account, I agree that I am a U.S. resident, 18 years or older with a valid bank account. I agree to Goalsetter’s Terms of Service.'
            }
          </Text>
          <CustomButton
            title="CREATE FREE ACCOUNT"
            disabled={true}
            onPress={goToLinkYourBank}
            style={styles.footerBtn}
          />
        </View>
      </View>
    </View>
  );
};

export default CreateAccount;
