import { DEFAULT_LOCALE, NEXT_LOCALE, NEXT_LOCALE_LANG_KEY, NEXT_LOCALE_QS_KEY } from '~config';

import ls from 'localstorage-slim';
import { getUrlParam } from '~utils';

/**
 * Detects the language used.
 * Resolves locale from query, localStorage or default
 * @returns locale
 */
export const languageDetect = (): string => {
  const lang = getUrlParam(NEXT_LOCALE_QS_KEY);

  return (lang as string) || (ls.get(NEXT_LOCALE) as string) || DEFAULT_LOCALE;
};

/**
 * Translate the string
 * @param text text will be translated
 * @returns translated text
 */
export const _trans = (text: string) => {
  const keyName = `${NEXT_LOCALE_LANG_KEY}_${languageDetect()}`;
  const cached = ls.get(keyName) as any;
  if (cached) {
    const splitT = text.split('.');
    let key;

    for (let index = 0; index < splitT.length; index++) {
      const element = splitT[`${index}`];
      key ? (key = key[`${element}`]) : (key = cached[`${element}`]);
    }

    return key;
  }
};
