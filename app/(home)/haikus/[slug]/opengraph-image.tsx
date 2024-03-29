import { getHaiku } from '@utils/supabase'
import { ImageResponse } from 'next/server'

// Route segment config
export const runtime = 'edge'

// Image metadata
export const alt = 'About Acme'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

interface ImageProps {
  params: {
    slug: string
  }
}

const splitHaiku = (haiku: string) => {
  // split haiku into lines
  const lines = haiku.split('/').map((line, number) => <span key={number}>{line}</span>)
  return lines
}

// Image generation
export default async function Image({ params }: ImageProps) {

  const { slug } = params
  const { data: haiku } = await getHaiku(slug)

  if (!haiku) {
    throw new Error(`Haiku not found for slug: ${params.slug}`)
  }

  const haikuText = haiku?.haiku_text || ''

  const haikuLines = splitHaiku(haikuText)

  return new ImageResponse(
    (

      <div tw="flex font-sans bg-neutral-900 text-white h-full w-full items-center justify-center px-10">
        <div tw="flex mx-auto max-w-7xl px-2 lg:px-6">
          <div tw="flex mx-auto lg:mx-0 flex-col">
            <p tw="text-4xl font-bold tracking-normal sm:text-7xl flex-col">
              {haikuLines}
            </p>
          </div>
        </div>
      </div>

    ),
    size
  )
}
