import { View, Text, Image } from 'react-native';
import React from 'react';
import CustomHeader from '../../components/CustomHeader';
import { images } from '../../themes';
import styles from './linkBank.style';
import { getLocalizedString } from '../../utils/localizedUtils';
import { Pages } from '../../enums/Pages';
import CustomButton from '../../components/CustomButton';

const localizedCopy = (value: string) =>
  getLocalizedString(`${Pages.LINK_BANK}.${value}`);
const LinkBank = () => {
  return (
    <View style={styles.container}>
      <CustomHeader title={localizedCopy('title')} />
      <View style={styles.content}>
        <Image source={images.LINK_BANK} style={styles.image} />
        <Text style={styles.familyBank}>{localizedCopy('familyBank')}</Text>
        <Text style={styles.description}>{localizedCopy('description')}</Text>
      </View>

      <View style={styles.footerWrapper}>
        <View style={styles.footerContainer}>
          <CustomButton
            title={localizedCopy('btnCta')}
            disabled={false}
            onPress={() => null}
            style={styles.footerBtn}
          />
        </View>
      </View>
    </View>
  );
};

export default LinkBank;
