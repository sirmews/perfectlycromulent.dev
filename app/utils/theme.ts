export type Theme = 'light' | 'dark'

/**
 * Check if window is defined
 */
export const windowExists = (): boolean => typeof window !== 'undefined'

/**
 * Get the initial theme based on user preference
 */
export const getInitialTheme = (): Theme => {
  if (windowExists() && window.localStorage) {
    const storedPrefs = window.localStorage.getItem('color-theme')
    if (typeof storedPrefs === 'string') {
      return storedPrefs as Theme
    }
    const userMedia = window.matchMedia('(prefers-color-scheme: dark)')
    if (userMedia.matches) {
      return 'dark'
    }
  }

  return 'light'
}

/**
 * Apply the theme to the root element
 */
export const applyTheme = (theme: Theme) => {
  if (windowExists() && window.localStorage) {
    const root = window.document.documentElement
    root.classList.remove('light', 'dark')
    root.classList.add(theme)
    window.localStorage.setItem('color-theme', theme)
  }
}
