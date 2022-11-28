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
      NEXT_PUBLIC_APP_ENV: 'development' | 'test' | 'stage' | 'production';
      NEXT_PUBLIC_APP_NAME: string;
      NEXT_PUBLIC_ENABLE_PROD_LOGS: boolean;
      NEXT_PUBLIC_LOG_LEVEL: 'Verbose' | 'Debug' | 'Info' | 'Warning' | 'Error' | 'Fatal';
      NEXT_PUBLIC_LOG_MESSAGE_TEMPLATE: string;
      NEXT_PUBLIC_WRITE_LOGS_TO_CONSOLE: boolean;
      NEXT_PUBLIC_WRITE_LOGS_TO_FILE: boolean;
      NEXT_PUBLIC_ENABLE_SEQ_LOGS: boolean;
      NEXT_PUBLIC_SEQ_URL: string;
      SEQ_API_KEY: string;
      NEXT_PUBLIC_API_BASE_URL: string;
      NEXT_PUBLIC_API_GATEWAY_URL: string;
      NEXT_PUBLIC_X_API_KEY_NAME: string;
      X_API_GATEWAY_KEY: string;
      NEXT_PUBLIC_APP_PROXY_KEY: string;
      NEXT_PUBLIC_CMS_PROXY_KEY: string;
      NEXT_PUBLIC_CACHE_TIME: string;
      NEXT_PUBLIC_CACHE_TIME_LANG: number;
      NEXTAUTH_URL: string;
      NEXTAUTH_SECRET: string;
      CLIENT_ID: string;
      CLIENT_SECRET: string;
      REDIS_ENDPOINT: string;
      REDIS_USERNAME: string;
      REDIS_PASSWORD: string;
      NEXT_PUBLIC_ANALYTICS_ID: string;
      NEXT_PUBLIC_GTMID: string;
      NEXT_PUBLIC_GTM_AUTH: string;
      NEXT_PUBLIC_GTM_PREVIEW: string;
    }
  }
}

// Trick to make this a valid module:
// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {};
