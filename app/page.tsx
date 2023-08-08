import Link from 'next/link'
import { Cursor, Hero, SubHero } from './components/index'

export default function Home() {
  return (
    <main className='flex min-h-screen'>
      <div className='space-y-12 pt-24 pb-24'>
        <Hero>
          Nav is a perfectly cromulent product engineer, an aspiring indiehacker
          and chronic oversharer on all things mental health.<Cursor />
        </Hero>
        <SubHero>
          Find him on...
          <ul className='space-y-3'>
            <li>
              <a
                href='https://www.linkedin.com/in/nav-rao/'
                rel='noreferrer noopener'
                target='_blank'
                className='border-b-4 hover:bg-white hover:text-gray-900'
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href='https://theperfectlycromulent.substack.com/'
                rel='noreferrer noopener'
                target='_blank'
                className='border-b-4 hover:bg-white hover:text-gray-900'
              >
                Substack
              </a>
            </li>
            <li>
              <a
                href='https://github.com/sirmews'
                rel='noreferrer noopener'
                target='_blank'
                className='border-b-4 hover:bg-white hover:text-gray-900'
              >
                Github
              </a>
            </li>
          </ul>
        </SubHero>
        <SubHero>
          Things he spends time on...
          <ul className='space-y-3'>
            <li>
              <Link className='border-b-4 hover:bg-white hover:text-gray-900' href='/haikus'>Writing Haikus</Link>
            </li>
          </ul>
        </SubHero>
      </div>
    </main>
  )
}
