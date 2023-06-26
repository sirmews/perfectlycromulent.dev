'use client'
import { useState, useEffect, useContext } from 'react'
import { FeatureContext } from '@/app/contexts'
import { Switch } from '@headlessui/react'
import { applyTheme, getInitialTheme } from '../../utils/theme'

export const ThemeToggle = () => {
  const { features } = useContext(FeatureContext);
  const colorScheme = features['color-scheme'];

  const [enabled, setEnabled] = useState<boolean>(false)

  const toggleTheme = () => {
    const newEnabled = !enabled
    const newTheme = newEnabled ? 'dark' : 'light'
    setEnabled(newEnabled)
    applyTheme(newTheme)
  }

  useEffect(() => {
    /**
     * If the color-scheme feature is set to manual, then we need to check localStorage
     * to see if the user has already set a preference. If not, we default to the OS preference.
     */
    if (colorScheme === 'manual') {
      const isEnabled = getInitialTheme() == 'dark' ? true : false
      setEnabled(isEnabled)
      applyTheme(getInitialTheme())
    } else {
      // If the color-scheme feature is not set to manual, then we just apply the theme
      applyTheme(colorScheme)
    }
  }, [colorScheme])

  if (colorScheme !== 'manual') {
    return null; // Do not render the toggle if color-scheme is not manual
  }

  return (
    <Switch
      checked={enabled}
      onChange={toggleTheme}
      className={`${
        enabled ? 'bg-slate-900 border-slate-300' : 'bg-white border-slate-900'
      } relative inline-flex h-6 w-11 items-center rounded-full border-2`}
    >
      <span className='sr-only'>Switch Light/Dark mode</span>
      <span
        className={`${
          enabled ? 'translate-x-5 bg-white' : 'translate-x-1 bg-slate-900'
        } inline-block h-4 w-4 transform rounded-full  transition`}
      />
    </Switch>
  )
}
