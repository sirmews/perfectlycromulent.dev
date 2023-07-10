import React from 'react'
import haikus from '@data/haikus.json'
import { Haiku, Hero } from '@components/index'
import { notFound } from 'next/navigation'

interface Haiku {
  id: string
  haiku: string
  date: string
}

export interface HaikuProps {
  haiku: Haiku
}

interface PageProps {
  params: {
    slug: string
  }
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

export default function Page({ params }: PageProps) {
  // get haiku from router query
  const { slug } = params
  const haiku = haikus.find((haiku) => haiku.id === slug)

  // return 404 if no haiku found
  if (!haiku) {
    notFound()
  }

  const textLines = splitHaiku(haiku.haiku)

  return (
    <div className='flex h-screen'>
      <div className='m-auto'>
        <Hero className='-mx-2 sm:-mx-6'>
          {textLines.map((line, index) => (
            <>
              {line}
              <br />
            </>
          ))}
        </Hero>
        {haiku?.date && (
          <p className='text-gray-500 text-sm py-2'>{haiku.date}</p>
        )}
      </div>
    </div>
  )
}
