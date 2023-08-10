import { Metadata } from 'next'
import Link from 'next/link'
import { Cursor, ExternalLink, Hero, SubHero } from './components/index'

const heading: string = `Nav is a perfectly cromulent product engineer, an aspiring indiehacker
and chronic oversharer on all things mental health.`

export const metadata: Metadata = {
  description: heading,
}


export default function Home() {
  return (
    <main className='flex min-h-screen'>
      <div className='space-y-12 pt-24 pb-24'>
        <Hero>
          {heading}<Cursor />
        </Hero>
        <SubHero>
          Find him on...
          <ul className='space-y-4'>
            <li>
              <ExternalLink
                href='https://www.linkedin.com/in/nav-rao/'
              >
                LinkedIn
              </ExternalLink>
            </li>
            <li>
              <ExternalLink
                href='https://theperfectlycromulent.substack.com/'
              >
                Substack
              </ExternalLink>
            </li>
            <li>
              <ExternalLink
                href='https://github.com/sirmews'
              >
                Github
              </ExternalLink>
            </li>
          </ul>
        </SubHero>
        <SubHero>
          Things he spends time on...
          <ul className='space-y-4'>
            <li>
              <Link className='border-b-4 hover:bg-white hover:text-gray-900' href='/haikus'>Writing Haikus</Link>
            </li>
          </ul>
        </SubHero>
      </div>
    </main>
  )
}

export { heading }
