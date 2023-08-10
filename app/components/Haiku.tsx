import { formatDate } from '@utils/date';
import Link from 'next/link';
import React from 'react';

export interface IHaiku {
  id: string
  haiku: string
  date: string
}

export interface HaikuProps {
  haiku: IHaiku
  className?: string
}

/**
 * Split string into individual lines of text
 * @param haiku
 * @returns
 */
const splitHaiku = (haiku: string) => {
  // split haiku into lines
  const lines = haiku.split('/')
  return lines
}

export const Haiku: React.FC<HaikuProps> = ({ haiku, className }) => {
  // get haiku from props as text

  const { haiku: text, id, date } = haiku

  return (
    <div className={className}>
      <div className='mx-auto max-w-7xl px-2 lg:px-6'>
        <div className='mx-auto lg:mx-0'>
          <Link
            href={`/haikus/${id}`}
            className='text-3xl font-semibold tracking-normal sm:text-5xl'
          >
            {splitHaiku(text).map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </Link>
          <time className='block text-gray-400 text-sm sm:text-base py-3' suppressHydrationWarning>
            {formatDate(date)}
          </time>
        </div>
      </div>
    </div>
  )
}
