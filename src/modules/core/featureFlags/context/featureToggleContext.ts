import React from 'react';

export const FeatureToggleContext = React.createContext({
  enabledFeatures: [] as string[],
  enableFeature: (_featureName: string) => {},
  disableFeature: (_featureName: string) => {},
});
