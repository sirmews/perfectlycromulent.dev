import { HaikuList, Hero, IHaiku } from '@components/index';
import { getHaikus } from '@utils/supabase';
import { Metadata } from 'next';

export const revalidate = 3600;

export const metadata: Metadata = {
  description: `Perfectly Cromulent Haikus - it's just 5-7-5 syllables`,
}

export default async function Page() {
  const haikus = await getData();

  return (
    <main className='flex min-h-screen'>
      <div className='space-y-12'>
        <Hero>
          Perfectly Cromulent Haikus.
          <br />
          When inspiration strikes in 5-7-5 syllables.
        </Hero>
        <div className='pt-20'>
          {haikus && haikus.length > 0 && (
            <HaikuList haikus={haikus} />
          )}
        </div>
      </div>
    </main>
  )
}

const getData = async () => {

  const { data } = await getHaikus();

  const haikus = data?.map((haiku) => {
    return {
      id: haiku.slug,
      haiku: haiku.haiku_text,
      description: haiku.description,
      date: haiku.date,
    } as IHaiku;
  });

  return haikus;
}