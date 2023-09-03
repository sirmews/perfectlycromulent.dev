import { Text } from '@components/Text'
import React from 'react'

export interface HeroProps {
  children: React.ReactNode
  className?: string
}

export const Hero: React.FC<HeroProps> = ({ children, className }) => {

  return (
    <div className={className}>
      <div>
        <Text size='xl' bold={true}>
          {children}
        </Text>
      </div>
    </div>
  )
}
