import { GTMID } from '~config';

export const GoogleTagManager = () => {
  const gtmId = `https://www.googletagmanager.com/ns.html?id=${GTMID}&gtm_auth={}&gtm_preview={}`;

  return <script id="gtm" src={gtmId} />;
};
