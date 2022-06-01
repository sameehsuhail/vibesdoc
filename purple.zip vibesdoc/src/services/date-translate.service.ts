import {
  enUS, ru, es, pt,
} from 'date-fns/locale';

// Register locales for which we wish to translate dates.
const locales: { [key: string]: Locale } = {
  en: enUS,
  ru,
  es,
  pt,
};

const getLocale = (localeCode: string) => locales[localeCode];

export default {
  getLocale,
};
