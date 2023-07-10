import React from 'react'

export interface HeroProps {
  children: React.ReactNode
  className?: string
}

export const Hero: React.FC<HeroProps> = ({ children, className }) => {
  const tagStyles: { [key: string]: string } = {
    a: 'border-b-4 hover:bg-white hover:text-gray-900',
  }

  const childrenWithExtraProp = React.Children.map(children, (child) => {
    if (
      React.isValidElement<HTMLElement>(child) &&
      tagStyles[child.type as string]
    ) {
      return React.cloneElement(child, {
        className: `${child.props.className} ${
          tagStyles[child.type as string]
        }`,
      })
    }
    return child
  })

  return (
    <div className={className}>
      <div className='mx-auto max-w-7xl px-2 lg:px-6'>
        <div className='mx-auto lg:mx-0'>
          <p className='text-4xl font-semibold tracking-normal sm:text-7xl'>
            {childrenWithExtraProp}
          </p>
        </div>
      </div>
    </div>
  )
}
