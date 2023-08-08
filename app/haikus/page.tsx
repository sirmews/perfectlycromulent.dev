import { Haiku, Hero } from '@components/index'
import haikus from '@data/haikus.json'
import { Metadata } from 'next'

export const metadata: Metadata = {
  description: `Perfectly Cromulent Haikus - it's just 5-7-5 syllables`,
}

export default function Page() {
  return (
    <main className='flex min-h-screen'>
      <div className='space-y-12 pt-24 pb-24'>
        <Hero>
          Perfectly Cromulent Haikus.
          <br />
          When inspiration strikes in 5-7-5 syllables.
        </Hero>
        <div className='space-y-20 pt-20'>
          {haikus.reverse().map((haiku) => (
            <Haiku key={haiku.id} haiku={haiku} className='block' />
          ))}
        </div>
      </div>
    </main>
  )
}
