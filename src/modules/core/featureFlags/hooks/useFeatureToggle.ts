import { FeatureToggleContext } from '../context';
import { useContext } from 'react';

export const useFeatureToggle = () => {
  const { enabledFeatures, enableFeature, disableFeature } = useContext(FeatureToggleContext);

  const isEnabled = (featureName: string) => {
    return enabledFeatures.includes(featureName);
  };

  return [isEnabled, enableFeature, disableFeature] as [
    (featureName: string) => boolean,
    (featureName: string) => void,
    (featureName: string) => void,
  ];
};
