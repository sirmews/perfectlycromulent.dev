import { Button } from '@components/Button'
import type { FunctionComponent } from 'react'

export interface IntroductionProps {
  title: string
  description: string
  links?: Array<{ name: string; url: string }>
}

export const Introduction: FunctionComponent<IntroductionProps> = ({
  title,
  description,
  links,
}) => (
  <div className='py-24 sm:py-32'>
    <div className='mx-auto max-w-7xl px-2 lg:px-6'>
      <div className='mx-auto max-w-2xl lg:mx-0'>
        <h2 className='text-5xl font-bold tracking-tight sm:text-7xl'>
          {title}
        </h2>
        <p className='mt-6 text-3xl leading-10 text-gray-600 dark:text-gray-300'>
          {description}
        </p>
        {links && (
          <ul className='mt-8 flex flex-row space-x-2'>
            {links.map((link, index) => (
              <li key={index}>
                <Button href={link.url} variant='primary' size='lg'>
                  {link.name}
                </Button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  </div>
)
