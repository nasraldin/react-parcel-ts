/// <reference types="node" />
/*
=============================================================================
Copyright 2021 Nasr Aldin. All Rights Reserved.
Project: Online Rent @frontend
The use of this source code is governed by Nasr Aldin.
See LICENSE in the project root for license information.
=============================================================================
*/

/*-----------------------------------------------*
 *                                               *
 *                   GLOBAL                      *
 *                  ProcessEnv                   *
 ------------------------------------------------*/

// Declare known environment variables.
// Enables auto-completion when using "process.env.".
// Makes it easier to find env vars, and helps avoid typo mistakes.
// Unlisted env vars will still be usable.
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      APP_NAME: string;
      PORT: number;
      ENABLE_PROD_LOGS: boolean;
      LOG_LEVEL: 'Verbose' | 'Debug' | 'Info' | 'Warning' | 'Error' | 'Fatal';
      LOG_MESSAGE_TEMPLATE: string;
      WRITE_LOGS_TO_CONSOLE: boolean;
      WRITE_LOGS_TO_FILE: boolean;
      ENABLE_SEQ_LOGS: boolean;
      SEQ_URL: string;
      SEQ_API_KEY: string;
      API_BASE_URL: string;
      API_GATEWAY_URL: string;
      X_API_KEY_NAME: string;
      X_API_GATEWAY_KEY: string;
      APP_PROXY_KEY: string;
      CMS_PROXY_KEY: string;
      CACHE_TIME: string;
      CACHE_TIME_LANG: number;
      NEXTAUTH_URL: string;
      NEXTAUTH_SECRET: string;
      CLIENT_ID: string;
      CLIENT_SECRET: string;
      REDIS_ENDPOINT: string;
      REDIS_USERNAME: string;
      REDIS_PASSWORD: string;
      ANALYTICS_ID: string;
      GTMID: string;
      GTM_AUTH: string;
      GTM_PREVIEW: string;
    }
  }
}

// Trick to make this a valid module:
// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {};
