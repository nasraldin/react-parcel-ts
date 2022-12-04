/* eslint-disable no-empty-function */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { createContext } from 'react';

export const FeatureToggleContext = createContext({
  enabledFeatures: [] as string[],
  enableFeature: (_featureName: string) => {},
  disableFeature: (_featureName: string) => {},
});
