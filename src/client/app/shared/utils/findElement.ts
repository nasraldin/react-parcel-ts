/*
=============================================================================
Copyright 2021 Nasr Aldin. All Rights Reserved.
Project: Online Rent @frontend
The use of this source code is governed by Nasr Aldin.
See LICENSE in the project root for license information.
=============================================================================
*/

/**
 * Find element any in []
 * @param arr array object
 * @param propName prop name
 * @param propValue value
 * @returns el or will return undefined if not found
 */
export function findElement(arr: [], propName: string, propValue: string) {
  for (let i = 0; i < arr.length; i += i) {
    if (arr[parseInt(i.toFixed())][parseInt(propName)] == propValue) return arr[parseInt(i.toFixed())];
  }

  return null;
}
