import { useState } from 'react';

import { FeatureToggleContext } from './context';

type Props = {
  enabledFeatures?: string[];
  children: JSX.Element;
};

export const FeatureToggle = ({ children, enabledFeatures = [] }: Props) => {
  const [activeFeatures, setFeatures] = useState<string[]>(enabledFeatures);

  const enableFeature = (featureName: string) => {
    setFeatures([...activeFeatures, featureName]);
  };

  const disableFeature = (featureName: string) => {
    setFeatures(activeFeatures.filter((feature) => feature !== featureName));
  };

  return (
    <FeatureToggleContext.Provider value={{ enabledFeatures: activeFeatures, enableFeature, disableFeature }}>
      {children}
    </FeatureToggleContext.Provider>
  );
};