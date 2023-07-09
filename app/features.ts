enum ColorSchemes {
  Dark = 'dark',
  Light = 'light',
  Manual = 'manual',
}

export interface TFeatures {
  'color-scheme': ColorSchemes
}

/**
 * Enable or disable features
 */
export const features: TFeatures = {
  'color-scheme': ColorSchemes.Dark,
}