import React from 'react'
import Link from 'next/link'

interface Haiku {
  id: string
  haiku: string
  date: string
}

export interface HaikuProps {
  haiku: Haiku
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

export const Haiku: React.FC<HaikuProps> = ({ haiku }) => {
  // get haiku from props as text

  const { haiku: text, id, date } = haiku

  return (
    <div className=''>
      <div className='mx-auto max-w-7xl px-2 lg:px-6'>
        <div className='mx-auto lg:mx-0'>
          <Link
            href={`/haikus/${id}`}
            className='text-3xl font-semibold tracking-normal sm:text-5xl'
          >
            {splitHaiku(text).map((line, index) => (
              <>
                {line}
                <br />
              </>
            ))}
          </Link>
          <p className='text-gray-500 text-sm py-2'>{date}</p>
        </div>
      </div>
    </div>
  )
}
