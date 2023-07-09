'use client';

import React, { createContext } from 'react';
import { features } from '../features';
import type { TFeatures } from '../features';

type FeatureContextType = {
  features: TFeatures
}

type FeatureProviderProps = {
  children: React.ReactNode;
}

export const FeatureContext = createContext<FeatureContextType>({
  features
})

export const FeatureProvider: React.FC<FeatureProviderProps> = ({ children }) => {
  return (
    <FeatureContext.Provider value={{ features }}>
      {children}
    </FeatureContext.Provider>
  )
}