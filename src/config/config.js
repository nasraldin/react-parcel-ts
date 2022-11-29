/*
=============================================================================
Copyright 2021 Nasr Aldin. All Rights Reserved.
Project: Online Rent @frontend
The use of this source code is governed by Nasr Aldin.
See LICENSE in the project root for license information.
=============================================================================
*/
/*
  XXX This file is loaded by "next.config.js" and cannot contain ES6+ code (import, etc.)
  Note that any change should/must be followed by a server restart, because it's used in "next.config.js"
*/

const packageJson = require('./package.json');

/*-----------------------------------------------*
 *                                               *
 *                     ENV                       *
 *                                               *
 ------------------------------------------------*/

/**
 * Return env name
 * development | stage | production
 */
const ENVIRONMENT = {
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
const NODE_ENV = () => {
  if (process.env.NODE_ENV) return ENVIRONMENT[process.env.NODE_ENV];
  return ENVIRONMENT.production;
};

/**
 * Get current application environment
 *
 * @returns: env name ex: development
 */
const APP_ENV = () => {
  if (process.env.NEXT_PUBLIC_APP_ENV) return ENVIRONMENT[process.env.NEXT_PUBLIC_APP_ENV];
  return ENVIRONMENT.production;
};

/**
 * Check current environment is production
 *
 * @returns: true if production else false
 */
const IS_PROD = process.env.NODE_ENV === ENVIRONMENT.production || APP_ENV() === ENVIRONMENT.production;

/**
 * Check app is call from Browser or NodeJS server
 * @returns if accessible return true
 */
const IS_BROWSER = typeof window !== 'undefined';

// App metadata
const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || packageJson.name;
const APP_VERSION = packageJson.version;
const APP_ID = 'a7d2f928-4bbf-4303-b796-214c2c51e93e';
const APP_TEMPLATE_VERSION = packageJson.templateVersion;
const APP_AUTHOR = packageJson.author;
const NEXT_VERSION = packageJson.dependencies.next;

// Logging
const ENABLE_PROD_LOGS = process.env.NEXT_PUBLIC_ENABLE_PROD_LOGS === true;
const LOG_LEVEL = process.env.NEXT_PUBLIC_LOG_LEVEL || 'Debug';
const LOG_MESSAGE_TEMPLATE = process.env.NEXT_PUBLIC_LOG_MESSAGE_TEMPLATE || '';
const WRITE_LOGS_TO_CONSOLE = process.env.NEXT_PUBLIC_WRITE_LOGS_TO_CONSOLE || false;
const WRITE_LOGS_TO_FILE = process.env.NEXT_PUBLIC_WRITE_LOGS_TO_FILE || false;
const ENABLE_SEQ_LOGS = process.env.NEXT_PUBLIC_ENABLE_SEQ_LOGS || false;
const SEQ_URL = process.env.NEXT_PUBLIC_SEQ_URL || '';
const SEQ_API_KEY = process.env.SEQ_API_KEY || '';

// App environment variables
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || '';
const API_GATEWAY_URL = process.env.NEXT_PUBLIC_API_GATEWAY_URL || '';
const X_API_KEY_NAME = process.env.NEXT_PUBLIC_X_API_KEY_NAME || '';
const X_API_GATEWAY_KEY = process.env.X_API_GATEWAY_KEY || '';
const APP_PROXY_KEY = process.env.NEXT_PUBLIC_APP_PROXY_KEY || '';
const CMS_PROXY_KEY = process.env.NEXT_PUBLIC_CMS_PROXY_KEY || '';
const CACHE_TIME = process.env.NEXT_PUBLIC_CACHE_TIME || IS_PROD ? 86400000 : 1000 * 60 * 60 * 1;
const CACHE_TIME_LANG = process.env.NEXT_PUBLIC_CACHE_TIME_LANG || IS_PROD ? 604800 : 300;
const NEXTAUTH_URL = process.env.NEXTAUTH_URL || '';
const NEXTAUTH_SECRET = process.env.NEXTAUTH_SECRET || '';
const CLIENT_ID = process.env.CLIENT_ID || '';
const CLIENT_SECRET = process.env.CLIENT_SECRET || '';
const REDIS_ENDPOINT = process.env.REDIS_ENDPOINT || '';
const REDIS_USERNAME = process.env.REDIS_USERNAME || '';
const REDIS_PASSWORD = process.env.REDIS_PASSWORD || '';
const ANALYTICS_ID = process.env.NEXT_PUBLIC_ANALYTICS_ID || '';
const GTMID = process.env.NEXT_PUBLIC_GTMID || '';
const GTM_AUTH = process.env.NEXT_PUBLIC_GTM_AUTH || '';
const GTM_PREVIEW = process.env.NEXT_PUBLIC_GTM_PREVIEW || '';

/*-----------------------------------------------*
 *                                               *
 *                 LOCALIZATION                  *
 *                                               *
 ------------------------------------------------*/

// App localization
const DEFAULT_LOCALE = 'en';
const LOCALE_PATH = '/locales';

/**
 * List of the app supported locales.
 *
 * @type [{culture: string, locale: string, displayName: string}]
 * @example {culture: 'en-US', locale: 'en', displayName: 'English'}
 */
const SUPPORTED_LOCALES = [
  { culture: 'en', locale: DEFAULT_LOCALE, displayName: 'English' },
  { culture: 'ar', locale: 'ar', displayName: 'العربية' },
];
const NEXT_LOCALE = 'NEXT_LOCALE';
const NEXT_LOCALE_DISPLAY_NAME = 'NEXT_LOCALE_DN';
const NEXT_LOCALE_QS_KEY = 'lang';
const NEXT_LOCALE_LANG_KEY = 'NEXT_LOCALE_TRANS';

/**
 * Returns the list of app supported languages.
 * Basically extracts the "locale" parameter from the supported locales array.
 *
 * @type {string[]}
 * @example ['en', 'ar']
 */
const SUPPORTED_LANGUAGES = [...new Set(SUPPORTED_LOCALES.map((l) => l.locale))];

/*
 * Locale namespaces
 */
const LOCALE_DEFAULT_NS = 'common';

module.exports = {
  ENVIRONMENT,
  NODE_ENV,
  APP_ENV,
  IS_PROD,
  IS_BROWSER,
  APP_NAME,
  APP_VERSION,
  APP_ID,
  APP_TEMPLATE_VERSION,
  APP_AUTHOR,
  NEXT_VERSION,
  ENABLE_PROD_LOGS,
  LOG_LEVEL,
  LOG_MESSAGE_TEMPLATE,
  WRITE_LOGS_TO_CONSOLE,
  WRITE_LOGS_TO_FILE,
  ENABLE_SEQ_LOGS,
  SEQ_URL,
  SEQ_API_KEY,
  API_BASE_URL,
  API_GATEWAY_URL,
  X_API_KEY_NAME,
  X_API_GATEWAY_KEY,
  APP_PROXY_KEY,
  CMS_PROXY_KEY,
  CACHE_TIME,
  CACHE_TIME_LANG,
  NEXTAUTH_URL,
  NEXTAUTH_SECRET,
  CLIENT_ID,
  CLIENT_SECRET,
  REDIS_ENDPOINT,
  REDIS_USERNAME,
  REDIS_PASSWORD,
  ANALYTICS_ID,
  GTMID,
  GTM_AUTH,
  GTM_PREVIEW,
  DEFAULT_LOCALE,
  LOCALE_PATH,
  SUPPORTED_LOCALES,
  NEXT_LOCALE,
  NEXT_LOCALE_DISPLAY_NAME,
  NEXT_LOCALE_QS_KEY,
  NEXT_LOCALE_LANG_KEY,
  SUPPORTED_LANGUAGES,
  LOCALE_DEFAULT_NS,
};
