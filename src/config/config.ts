/*
=============================================================================
Copyright 2021 Nasr Aldin. All Rights Reserved.
Project: Online Rent @frontend
The use of this source code is governed by Nasr Aldin.
See LICENSE in the project root for license information.
=============================================================================
*/

import packageJson from '~root/package.json';

/*-----------------------------------------------*
 *                                               *
 *                     ENV                       *
 *                                               *
 ------------------------------------------------*/

/**
 * Return env name
 * development | stage | production
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const ENVIRONMENT: any = {
  development: 'development',
  production: 'production',
  stage: 'stage',
  test: 'test',
};

/**
 * Get current node environment
 *
 * @returns: env name ex: development
 */
export const NODE_ENV = () => {
  if (process.env.NODE_ENV) return ENVIRONMENT[process.env.NODE_ENV];
  return ENVIRONMENT.production;
};

/**
 * Get current application environment
 *
 * @returns: env name ex: development
 */
export const APP_ENV = () => {
  if (process.env.APP_ENV) return ENVIRONMENT[process.env.APP_ENV];
  return ENVIRONMENT.production;
};

/**
 * Check current environment is production
 *
 * @returns: true if production else false
 */
export const IS_PROD = process.env.NODE_ENV === ENVIRONMENT.production || APP_ENV() === ENVIRONMENT.production;

/**
 * Check app is call from Browser or NodeJS server
 * @returns if accessible return true
 */
export const IS_BROWSER = typeof window !== 'undefined';

// App metadata
export const APP_NAME = process.env.APP_NAME || name;
export const APP_VERSION = packageJson.version;
export const APP_ID = 'a7d2f928-4bbf-4303-b796-214c2c51e93e';
export const APP_TEMPLATE_VERSION = packageJson.templateVersion;
export const APP_AUTHOR = packageJson.author;
export const REACT_VERSION = packageJson.dependencies.react;

// Logging
export const ENABLE_PROD_LOGS = process.env.ENABLE_PROD_LOGS === true;
export const LOG_LEVEL = process.env.LOG_LEVEL || 'Debug';
export const LOG_MESSAGE_TEMPLATE = process.env.LOG_MESSAGE_TEMPLATE || '';
export const WRITE_LOGS_TO_CONSOLE = process.env.WRITE_LOGS_TO_CONSOLE || false;
export const WRITE_LOGS_TO_FILE = process.env.WRITE_LOGS_TO_FILE || false;
export const ENABLE_SEQ_LOGS = process.env.ENABLE_SEQ_LOGS || false;
export const SEQ_URL = process.env.SEQ_URL || '';
export const SEQ_API_KEY = process.env.SEQ_API_KEY || '';

// App environment variables
export const API_BASE_URL = process.env.API_BASE_URL || '';
export const API_GATEWAY_URL = process.env.API_GATEWAY_URL || '';
export const X_API_KEY_NAME = process.env.X_API_KEY_NAME || '';
export const X_API_GATEWAY_KEY = process.env.X_API_GATEWAY_KEY || '';
export const APP_PROXY_KEY = process.env.APP_PROXY_KEY || '';
export const CMS_PROXY_KEY = process.env.CMS_PROXY_KEY || '';
export const CACHE_TIME = process.env.CACHE_TIME || IS_PROD ? 86400000 : 1000 * 60 * 60 * 1;
export const CACHE_TIME_LANG = process.env.CACHE_TIME_LANG || IS_PROD ? 604800 : 300;
export const AUTH_URL = process.env.AUTH_URL || '';
export const AUTH_SECRET = process.env.AUTH_SECRET || '';
export const CLIENT_ID = process.env.CLIENT_ID || '';
export const CLIENT_SECRET = process.env.CLIENT_SECRET || '';
export const REDIS_ENDPOINT = process.env.REDIS_ENDPOINT || '';
export const REDIS_USERNAME = process.env.REDIS_USERNAME || '';
export const REDIS_PASSWORD = process.env.REDIS_PASSWORD || '';
export const ANALYTICS_ID = process.env.ANALYTICS_ID || '';
export const GTMID = process.env.GTMID || '';
export const GTM_AUTH = process.env.GTM_AUTH || '';
export const GTM_PREVIEW = process.env.GTM_PREVIEW || '';

/*-----------------------------------------------*
 *                                               *
 *                 LOCALIZATION                  *
 *                                               *
 ------------------------------------------------*/

// App localization
export const DEFAULT_LOCALE = 'en';
export const LOCALE_PATH = '/locales';

/**
 * List of the app supported locales.
 *
 * @type [{culture: string, locale: string, displayName: string}]
 * @example {culture: 'en-US', locale: 'en', displayName: 'English'}
 */
export const SUPPORTED_LOCALES = [
  { culture: 'en', locale: DEFAULT_LOCALE, displayName: 'English' },
  { culture: 'ar', locale: 'ar', displayName: 'العربية' },
];
export const APP_LOCALE = 'APP_LOCALE';
export const APP_LOCALE_DISPLAY_NAME = 'APP_LOCALE_DN';
export const APP_LOCALE_QS_KEY = 'lang';
export const APP_LOCALE_LANG_KEY = 'APP_LOCALE_TRANS';

/**
 * Returns the list of app supported languages.
 * Basically extracts the "locale" parameter from the supported locales array.
 *
 * @type {string[]}
 * @example ['en', 'ar']
 */
export const SUPPORTED_LANGUAGES = [...new Set(SUPPORTED_LOCALES.map((l) => l.locale))];

/*
 * Locale namespaces
 */
export const LOCALE_DEFAULT_NS = 'common';
