/*
=============================================================================
Copyright 2021 Nasr Aldin. All Rights Reserved.
Project: Online Rent @frontend
The use of this source code is governed by Nasr Aldin.
See LICENSE in the project root for license information.
=============================================================================
*/

import { IS_BROWSER } from 'config';

import { GenericObject } from '../types';

export function getQueryParam(prop: string) {
  // Check isBrowser
  if (!IS_BROWSER) return false;

  const params: GenericObject = {};
  const search = decodeURIComponent(window.location.href.slice(window.location.href.indexOf('?') + 1));
  const definitions = search.split('&');

  definitions.forEach(function (val) {
    const parts = val.split('=', 2);
    params[parts[0]] = parts[1];
  });

  return prop && prop in params ? params[`${prop}`] : params;
}

export function getUrlParam(param: string, url?: string) {
  // Check isBrowser
  if (!IS_BROWSER) return false;

  // get query string from url (optional) or window
  const queryString = url ? url.split('?')[1] : window.location.search.slice(1);

  // we'll store the parameters here
  // var obj = {};

  // if query string exists
  if (queryString) {
    const urlParams = new URLSearchParams(queryString);
    return urlParams.get(param);
  }

  return false;
}
