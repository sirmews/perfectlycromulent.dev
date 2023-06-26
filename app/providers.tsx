'use client';
import { FeatureProvider } from '@/app/contexts';
import React from 'react';

type ProvidersProps = {
  children: React.ReactNode;
}

const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return (
    <FeatureProvider>
      {children}
    </FeatureProvider>
  );
}

export default Providers;