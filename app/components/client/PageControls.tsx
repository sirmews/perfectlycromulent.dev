'use client'
import type { ReactNode, FunctionComponent } from 'react'
import { ThemeToggle } from './'

export const PageControls: FunctionComponent = () => (
  <div className='flex justify-end px-2.5 py-2.5'>
    <ThemeToggle />
  </div>
)
