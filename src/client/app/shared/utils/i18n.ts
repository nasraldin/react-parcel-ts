import ls from 'localstorage-slim';

import { APP_LOCALE, APP_LOCALE_LANG_KEY, APP_LOCALE_QS_KEY, DEFAULT_LOCALE } from '~config';
import { getUrlParam } from '~utils';

/**
 * Detects the language used.
 * Resolves locale from query, localStorage or default
 * @returns locale
 */
export const languageDetect = (): string => {
  const lang = getUrlParam(APP_LOCALE_QS_KEY);

  return (lang as string) || (ls.get(APP_LOCALE) as string) || DEFAULT_LOCALE;
};

/**
 * Translate the string
 * @param text text will be translated
 * @returns translated text
 */
export const _trans = (text: string) => {
  const keyName = `${APP_LOCALE_LANG_KEY}_${languageDetect()}`;
  const cached = ls.get(keyName) as never;
  if (cached) {
    const splitT = text.split('.');
    let key;

    for (let index = 0; index < splitT.length; index += index) {
      const element = splitT[`${index}`];
      key ? (key = key[`${element}`]) : (key = cached[`${element}`]);
    }

    return key;
  }

  return null;
};
