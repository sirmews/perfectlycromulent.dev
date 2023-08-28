import { Haiku, Paragraph } from '@components/index'
import { formatDate, randomLocations } from '@utils/date'
import { getHaiku, getHaikus } from '@utils/supabase'
import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

interface Haiku {
  id: string
  haiku: string
  date: string
  description?: string
}

export interface HaikuProps {
  haiku: Haiku
}

interface Params {
  slug: string
}

interface PageProps {
  params: Params
}

export async function generateMetadata(
  { params }: PageProps
): Promise<Metadata> {
  // read route params
  const { slug } = params

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

export default async function Page(props: PageProps) {
  // get haiku from router query
  const { params } = props;
  const { slug } = params
  const { data: haiku } = await getHaiku(slug)

  // return 404 if no haiku found
  if (!haiku) {
    notFound()
  }

  const textLines = splitHaiku(haiku.haiku_text)

  return (
    <div className='flex sm:min-h-screen py-6 sm:py-0 sm:py-10'>
      <div className='my-auto h-full'>
        <div className='mx-auto'>
          <div className='mx-auto lg:mx-0'>
            <p className='text-4xl font-semibold tracking-normal sm:text-7xl flex flex-col space-y-1'>
              {textLines.map((line, index) => (
                <span key={index}>
                  {line}
                </span>
              ))}
            </p>
          </div>
        </div>

        {haiku?.date && (
          <p className='text-gray-400 text-sm sm:text-base py-3'>
            Written on {formatDate(haiku.date)}, {randomLocations()}.
          </p>
        )}
        {haiku?.description && <div className='pt-8 pb-4 max-w-xl'>
          <Paragraph className='text-gray-300'>{haiku.description}</Paragraph>
        </div>}
        <div className='py-4 text-lg font-semibold tracking-normal sm:text-xl'>
          <Link className='border-b-2 border-b-4 hover:bg-white hover:text-gray-900' href='/haikus'>← More Haikus</Link>
        </div>
      </div>
    </div >
  )
}

/**
 * Generate static paths for all haikus
 */
export async function generateStaticParams(): Promise<any> {
  const { data: haikus } = await getHaikus()

  return haikus?.map(({ slug }) => ({
    slug,
  }))
}