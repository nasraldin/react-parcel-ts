/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import React from 'react';

export const FeatureToggleContext = React.createContext({
  enabledFeatures: [] as string[],
  enableFeature: (_featureName: string) => {},
  disableFeature: (_featureName: string) => {},
});
