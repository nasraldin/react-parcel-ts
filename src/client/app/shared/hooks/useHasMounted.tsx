import { useEffect, useState } from 'react';

/**
 * Utility hook to properly handle expected differences between server and browser rendering.
 * Helps to avoid "Text content did not match" warnings, during React rehydration.
 *
 * Similar to "DisplayOnBrowserMount" component, but as a hook.
 *
 * Strongly inspired from useHasMounted
 * @see https://joshwcomeau.com/react/the-perils-of-rehydration/#abstractions
 */
export const useHasMounted = (): boolean => {
  const [hasMounted, setHasMounted] = useState<boolean>(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  return hasMounted;
};