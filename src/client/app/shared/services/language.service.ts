/*
=============================================================================
Copyright 2022 Nasr Aldin. All Rights Reserved.
Project: Online Rent @frontend
The use of this source code is governed by Nasr Aldin.
See LICENSE in the project root for license information.
=============================================================================
*/

import ls from 'localstorage-slim';

import {
  APP_LOCALE,
  APP_LOCALE_DISPLAY_NAME,
  APP_LOCALE_LANG_KEY,
  APP_LOCALE_QS_KEY,
  CACHE_TIME_LANG,
  DEFAULT_LOCALE,
  IS_BROWSER,
  LOCALE_DEFAULT_NS,
  LOCALE_PATH,
  SUPPORTED_LOCALES,
} from 'config';
import { log, LogLevel } from 'logger';
import { CheckDir, getUrlParam, Regex } from 'utils';

export class LangService {
  /**
   * Check locale supported.
   * @returns true if supported, otherwise false
   */
  isSupportedLocale = (locale: string): boolean => {
    if (!SUPPORTED_LOCALES.find((l) => l.locale === locale)) {
      log(`Our platform does not supported language ${locale} yet!`, LangService.name, LogLevel.Warning);
      return false;
    }

    return true;
  };

  /**
   * Detects the language used.
   * Resolves locale from query, localStorage or default
   * @returns locale
   */
  languageDetect(): string {
    const lang = getUrlParam(APP_LOCALE_QS_KEY);

    return (lang as string) || (ls.get(APP_LOCALE) as string) || DEFAULT_LOCALE;
  }

  getCurrentDir(): string {
    return this.languageDetect()?.match(Regex.Arabic) ? CheckDir(true) : CheckDir(false);
  }

  isRtl(): boolean {
    if (!IS_BROWSER) return false;

    return this.languageDetect()?.match(Regex.Arabic) ? true : false;
  }

  changeLanguage(locale: string): void {
    if (!this.isSupportedLocale(locale)) {
      return;
    }

    const localeDisplayName = SUPPORTED_LOCALES.find((l) => l.locale === locale)?.displayName;
    const docDir = locale?.match(Regex.Arabic) ? CheckDir(true) : CheckDir(false);

    ls.set(APP_LOCALE, locale);
    ls.set(APP_LOCALE_DISPLAY_NAME, localeDisplayName);
    this.fetchTranslations(locale);

    if (IS_BROWSER) {
      window.document.documentElement.lang = locale;
      window.document.documentElement.dir = docDir;
    }

    log(
      `User language changed to ${locale}, displayName ${localeDisplayName}, document dir ${docDir}`,
      LangService.name,
      LogLevel.Information,
    );
  }

  /**
   * Load translation to localstorage
   * @param locale lang name
   * @param namespace translation file
   */
  fetchTranslations = async (locale: string, namespace: string = LOCALE_DEFAULT_NS) => {
    if (!this.isSupportedLocale(locale)) {
      return;
    }

    // Cached locales data in localstorage
    const keyName = `${APP_LOCALE_LANG_KEY}_${locale}`;
    const cached = ls.get(keyName);

    if (cached) {
      log(`locale ${locale} has cached to localstorage with key ${keyName}`, LangService.name, LogLevel.Information);
      return;
    }

    // load locales from json file
    const response = await fetch(`${LOCALE_PATH}/${locale}/${namespace}.json`).then((res) => {
      return res.json();
    });

    ls.set(keyName, response, { ttl: CACHE_TIME_LANG });

    log(
      `locale ${locale} has loaded from json file first time load and set to localstorage with key ${keyName}`,
      LangService.name,
      LogLevel.Information,
    );
  };

  /**
   * Translate the string
   * @param text text will be translated
   * @returns translated text
   */
  _trans = (text: string) => {
    const keyName = `${APP_LOCALE_LANG_KEY}_${this.languageDetect()}`;
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
}
