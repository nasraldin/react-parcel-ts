import { IS_BROWSER } from '~config';

/**
 * Check value from env is boolean
 *
 * @param value
 * @returns true or false
 */
export const CheckBoolean = (value: unknown): boolean => {
  return value === 'true' ? true : false;
};

/**
 * Return document direction rtl, ltr
 * @param isRtl
 * @returns rtl or ltr
 */
export const CheckDir = (isRtl = false): string => {
  return isRtl ? 'rtl' : 'ltr';
};

/**
 * Check object type
 */
export const _typeOf = {
  /**
   * Check object type, this well handles all types
   * @param prop object well check
   * @returns return the object type as Full Class like [object Array]
   */
  check: (prop: unknown) => {
    return Object.prototype.toString.call(prop);
  },

  null: '[object Null]',
  object: '[object Object]',
  array: '[object Array]',
  json: '[object JSON]',
  string: '[object String]',
  number: '[object Number]',
  date: '[object Date]',
  boolean: '[object Boolean]',
  arguments: '[object Arguments]',
  error: '[object Error]',
  regx: '[object RegExp]',
  math: '[object Math]',
};

/**
 * Check access localStorage in window
 * @returns if available return true
 */
export const isLocalStorageAvailable = () => {
  const testVal = '__check_storage__';

  // Check isBrowser
  if (!IS_BROWSER) return false;

  try {
    localStorage.setItem(testVal, testVal);
    localStorage.removeItem(testVal);
    // available
    return true;
  } catch (e) {
    // unavailable
    return false;
  }
};

/**
 * Check access sessionStorage in window
 * @returns if available return true
 */
export const isSessionStorageAvailable = () => {
  const testVal = '__check_session__';

  // Check isBrowser
  if (!IS_BROWSER) return false;

  try {
    sessionStorage.setItem(testVal, testVal);
    sessionStorage.removeItem(testVal);
    // available
    return true;
  } catch (e) {
    // unavailable
    return false;
  }
};

/**
 * Check if is browser support canvas
 * @returns if available return canvas
 */
export const isWebpSupported = () => {
  // Check isBrowser
  if (!IS_BROWSER) return false;

  const canvas = document.createElement('canvas');

  return canvas.getContext && canvas.getContext('2d') && canvas.toDataURL('image/webp').indexOf('data:image/webp') == 0;
};

/**
 * Generate random number within (min, max)
 * @returns if available return canvas
 */
export const randomInt = (min: number, max: number) => {
  const num = Math.random() * (max - min) + min;

  return Math.round(num);
};
