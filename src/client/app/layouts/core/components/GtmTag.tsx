import { GTM_ID } from '~config';

export const GoogleTagManager = () => {
  const gtmId = `https://www.googletagmanager.com/ns.html?id=${GTM_ID}&gtm_auth={}&gtm_preview={}`;

  return <script id="gtm" src={gtmId} />;
};
