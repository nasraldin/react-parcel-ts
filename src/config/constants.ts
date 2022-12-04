/*-----------------------------------------------*
 *                                               *
 *             App Global Constants              *
 *                                               *
 ------------------------------------------------*/

export const Assets = {
  assets: 'public/',
  locales: 'public/locales/',
  images: 'public/images/',
  icons: 'public/icons/',
  fonts: 'public/fonts/',
};

export const USER_LS_KEY = 'user';
export const KEY_LOGGING = 'logs';

/**
 * Control Status
 * { disable, enable }
 */
export class ControlStatus {
  public static readonly disable = 'disable';
  public static readonly enable = 'enable';
}
