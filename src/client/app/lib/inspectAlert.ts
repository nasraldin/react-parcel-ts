/* eslint-disable no-console */
/*
=============================================================================
Copyright 2022 Nasr Aldin. All Rights Reserved.
Project: Online Rent @frontend
The use of this source code is governed by Nasr Aldin.
See LICENSE in the project root for license information.
=============================================================================
*/

import { IS_BROWSER } from '~config';
import Json from '~data/json/console-alert.json';

// Print Alert message to console for inspect
export const AlertOpenInspect = (() => {
  if (!IS_BROWSER) return;

  console.log(`%c${Json.title}!`, 'color: red; font-size:30px;border-color:black;');
  console.log(`%c${Json.header}`, 'color: blue; font-size:18;border-color:black;');
  console.log(`%c${Json.content}`, 'color: blue; font-size:18;border-color:black;');
  console.log(`%c${Json.feedbackLink}`, 'color: blue; font-size:18;border-color:black;');
})();
