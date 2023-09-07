'use server'

import { HaikuText } from '@components/HaikuText';
import { SubscribeForm } from '@components/SubscribeForm';
import { Text } from '@components/Text';
import { Haiku } from '@components/index';
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

export default async function Page(props: PageProps) {
  // get haiku from router query
  const { params } = props;
  const { slug } = params
  const { data: haiku } = await getHaiku(slug)

  // return 404 if no haiku found
  if (!haiku) {
    notFound()
  }

  return (

    <div className=''>
      <HaikuText text={haiku.haiku_text} />
      {haiku?.date && (
        <Text size='xs' className='text-gray-400 py-3'>
          Written on {formatDate(haiku.date)}, {randomLocations()}.
        </Text>
      )}

      {haiku?.description && <div className='pt-8 pb-4 max-w-xl'>
        <Text size='md' className='text-gray-300 whitespace-pre-wrap'>{haiku.description}</Text>
      </div>}

      <SubscribeForm />

      <div className='py-4 text-lg font-semibold tracking-normal sm:text-xl'>
        <Text size='md'>
          <Link className='border-b-2 border-b-4 hover:bg-white hover:text-gray-900' href='/haikus'>
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