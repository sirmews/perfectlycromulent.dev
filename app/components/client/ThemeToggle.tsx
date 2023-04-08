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
  }, [enabled])

  return (
    <Switch
      checked={enabled}
      onChange={toggleTheme}
      className={`${
        enabled ? 'bg-slate-900' : 'bg-slate-300'
      } relative inline-flex h-6 w-11 items-center rounded-full`}
    >
      <span className='sr-only'>Switch Light/Dark mode</span>
      <span
        className={`${
          enabled ? 'translate-x-6' : 'translate-x-1'
        } inline-block h-4 w-4 transform rounded-full bg-white transition`}
      />
    </Switch>
  )
}
