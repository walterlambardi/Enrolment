import { View, Text, Image } from 'react-native';
import React from 'react';
import { images } from '../../themes';
import styles from './termsOfService.style';
import { getLocalizedString } from '../../utils/localizedUtils';
import { Pages } from '../../enums/Pages';

const localizedCopy = (value: string) =>
  getLocalizedString(`${Pages.TERMS_OF_SERVICE}.${value}`);

const TermsOfService = () => (
  <View style={styles.container}>
    <View style={styles.imagesContainer}>
      <Image source={images.ILUSTRATION} style={styles.ilustration} />
      <Image source={images.FLYING_MONEY} style={styles.flyingMoney} />
    </View>
    <Text style={styles.text}>{localizedCopy('description')}</Text>
    <Text style={styles.text}>{localizedCopy('text1')}</Text>
    <Text style={styles.text}>{localizedCopy('text2')}</Text>
    <Text style={styles.text}>{localizedCopy('text3')}</Text>
  </View>
);

export default TermsOfService;
