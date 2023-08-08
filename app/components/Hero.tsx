import React from 'react'

export interface HeroProps {
  children: React.ReactNode
  className?: string
}

export const Hero: React.FC<HeroProps> = ({ children, className }) => {

  return (
    <div className={className}>
      <div className='mx-auto max-w-7xl px-2 lg:px-6'>
        <div className='mx-auto lg:mx-0'>
          <p className='text-4xl font-semibold tracking-normal sm:text-7xl'>
            {children}
          </p>
        </div>
      </div>
    </div>
  )
}
