'use client'
import { useState, useEffect } from 'react'
import { Switch } from '@headlessui/react'
import { applyTheme, getInitialTheme } from '../../utils/theme'

export const ThemeToggle = () => {
  const [enabled, setEnabled] = useState<boolean>(false)

  const toggleTheme = () => {
    const newEnabled = !enabled
    const newTheme = newEnabled ? 'dark' : 'light'
    setEnabled(newEnabled)
    applyTheme(newTheme)
  }

  useEffect(() => {
    const isEnabled = getInitialTheme() == 'dark' ? true : false
    setEnabled(isEnabled)
    applyTheme(getInitialTheme())
  }, [enabled])

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
