import i18n from 'i18n-js';
import * as RNLocalize from 'react-native-localize';
import en from '../locales/en';

const locales = RNLocalize.getLocales();

if (Array.isArray(locales)) {
  i18n.locale = locales[0]?.languageTag;
}

i18n.fallbacks = true;
i18n.translations = {
  en,
};

// @ts-ignore
export const getLocalizedString = (...value: any) => i18n.t(...value);
