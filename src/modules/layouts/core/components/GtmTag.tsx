import { GTMID } from '~config';
import Script from 'next/script';

export const GoogleTagManager = () => {
  const gtmId = `https://www.googletagmanager.com/ns.html?id=${GTMID}&gtm_auth={}&gtm_preview={}`;

  return <Script id="gtm" src={gtmId} />;
};
