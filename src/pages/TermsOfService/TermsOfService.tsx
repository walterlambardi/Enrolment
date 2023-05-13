import { SafeAreaView, Text, Button } from 'react-native';
import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParams } from '../../navigation';
import { Pages } from '../../enums/Pages';

type Props = NativeStackScreenProps<RootStackParams, Pages.TERMS_OF_SERVICE>;

const TermsOfService = ({ navigation }: Props) => {
  return (
    <SafeAreaView>
      <Text>{'TermsOfService'}</Text>
      <Button title="Back" onPress={navigation.goBack} />
    </SafeAreaView>
  );
};

export default TermsOfService;
