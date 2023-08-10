import { HaikuList, Hero } from '@components/index';
import haikus from '@data/haikus.json';
import { Metadata } from 'next';

export const metadata: Metadata = {
  description: `Perfectly Cromulent Haikus - it's just 5-7-5 syllables`,
}

export default async function Page() {
  const haikus = await getData();

  return (
    <main className='flex min-h-screen'>
      <div className='space-y-12 pt-24 pb-24'>
        <Hero>
          Perfectly Cromulent Haikus.
          <br />
          When inspiration strikes in 5-7-5 syllables.
        </Hero>
        <div className='pt-20'>
          <HaikuList haikus={haikus} />
        </div>
      </div>
    </main>
  )
}


// use backend to retrieve the haikus
const getData = async () => {
  const reversedHaikus = haikus.reverse();
  return reversedHaikus;
}