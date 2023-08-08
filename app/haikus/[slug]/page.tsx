import { Haiku, Hero } from '@components/index'
import haikus from '@data/haikus.json'
import type { Metadata, ResolvingMetadata } from 'next'
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

export async function generateMetadata(
  { params }: PageProps,
  parent?: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const { slug } = params

  // fetch data
  const haiku = findTheHaiku(slug)


  return {
    description: `Something about ${slugToTitle(slug)}`,
  }
}

/**
 * Convert slug to title for SEO reasons
 * @param slug - the slug of the haiku specified in the haiku json file
 * @returns 
 */
const slugToTitle = (slug: string) => {
  const words = slug.split('-')
  return words.map((word) => word[0] + word.slice(1)).join(' ')
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

/**
 * Find the haiku by slug
 * @param slug - the slug of the haiku specified in the haiku json file
 */
const findTheHaiku = (slug: string) => {
  return haikus.find((haiku) => haiku.id === slug)
}

export default function Page({ params }: PageProps) {
  // get haiku from router query
  const { slug } = params
  const haiku = findTheHaiku(slug)

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
