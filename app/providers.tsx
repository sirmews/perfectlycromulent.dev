'use client';
import { AnalyticsPostHogProvider, FeatureProvider } from '@/app/contexts';
import React from 'react';

type ProvidersProps = {
  children: React.ReactNode;
}

const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return (
    <AnalyticsPostHogProvider>
      <FeatureProvider>
        {children}
      </FeatureProvider>
    </AnalyticsPostHogProvider>
  );
}

export default Providers;