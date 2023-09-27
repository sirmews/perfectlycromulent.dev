'use server'

import { HaikuText } from '@components/HaikuText';
import { SubscribeForm } from '@components/SubscribeForm';
import { Text } from '@components/Text';
import { Haiku } from '@components/index';
import SubstackIcon from '@icons/SubstackIcon';
import { generateRandomGradient } from '@utils/colors';
import { formatDate, randomLocations } from '@utils/date';
import { getHaiku, getHaikus } from '@utils/supabase';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

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

function formatDescription(description: string) {
  // Use a simple regex to detect URLs
  const urlRegex = /(https?:\/\/[^\s]+)/g;

  return description.split(urlRegex).map((part, index) => {
    if (part.match(urlRegex)) {
      return <a key={index} className="border-b-2 border-b-4 hover:bg-simpsons-yellow hover:text-gray-900" href={part} target="_blank" rel="noopener noreferrer">{part}</a>;
    } else {
      return part;
    }
  });
}


export default async function Page(props: PageProps) {
  // get haiku from router query
  const { params } = props;
  const { slug } = params
  const { data: haiku } = await getHaiku(slug)

  const metadata: any = haiku?.metadata ?? {};
  // if there is a style property in the metadata, use it
  const customStyle = metadata?.style ?? {}

  const links = metadata?.links ?? []

  // return 404 if no haiku found
  if (!haiku) {
    notFound()
  }

  return (

    <div className=''>
      <div className="bg-clip-text text-transparent" style={{ ...customStyle, backgroundImage: generateRandomGradient() }}>
        <HaikuText text={haiku.haiku_text} />
      </div>
      {haiku?.date && (
        <Text size='xs' className='text-gray-400 py-3'>
          Written on {formatDate(haiku.date)}, {randomLocations()}.
        </Text>
      )}

      {haiku?.description && <div className='pt-8 pb-4 max-w-xl'>
        <Text size='md' className='text-gray-300 whitespace-pre-wrap'>{formatDescription(haiku.description)}</Text>
      </div>}

      {links.length > 0 && links.map((link: any, key: number) => (
        <div key={key} className='my-4'>
          <div className='inline-flex'>
            <a href={link.link}
              target="_blank"
              rel='noreferrer noopener'
              className="border-white border-solid border-none inline-flex items-center gap-x-2 rounded-md px-5 py-3 text-sm font-semibold shadow-sm  bg-white text-gray-900 hover:text-gray-900 hover:bg-simpsons-yellow"
            >
              <SubstackIcon className='w-6 h-6 hover:fill-[#FF6719]' />
              {link.text}
            </a>
          </div>
        </div>
      ))}

      <SubscribeForm />

      <div className='py-4 text-lg font-semibold tracking-normal sm:text-xl'>
        <Text size='md'>
          <Link className='border-b-2 border-b-4 hover:bg-simpsons-yellow hover:text-gray-900' href='/haikus'>
            ← More Haikus
          </Link>
        </Text>
      </div>
    </div>
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