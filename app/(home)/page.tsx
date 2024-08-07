import { Metadata } from 'next'
import Link from 'next/link'
import { Cursor, Hero, StyledLink, SubHero } from '../components/index'
import Random from './Random'

const heading: string = `Nav is a perfectly cromulent product engineer, an aspiring indiehacker
and chronic oversharer on all things mental health.`

export const metadata: Metadata = {
  description: heading,
}


export default function Home() {
  
  return (
    <main className='flex min-h-screen flex-col'>
      <div className='space-y-12'>
        <Hero>
          Nav is a <span className='text-simpsons-yellow'>perfectly cromulent</span> product engineer, an aspiring indiehacker
          and chronic oversharer on all things mental health.<Cursor />
        </Hero>
        <SubHero>
          Find him on the internet.
          <ul className='space-y-4 mt-2'>
            <li>
              <StyledLink
                href='https://www.linkedin.com/in/nav-rao/'
              >
                LinkedIn
              </StyledLink>
            </li>
            <li>
              <StyledLink
                href='https://theperfectlycromulent.substack.com/'
              >
                Substack
              </StyledLink>
            </li>
            <li>
              <StyledLink
                href='https://github.com/sirmews'
              >
                Github
              </StyledLink>
            </li>
          </ul>
        </SubHero>
        <SubHero>
          Random projects for fun, not profit.
          <ul className='space-y-4 mt-2'>
            <li>
              <Link className='border-b-4 cursor-pointer hover:bg-simpsons-yellow hover:text-gray-900' href='/haikus'>Writing Haikus</Link>
            </li>
          </ul>
        </SubHero>
        <Random/>
      </div>
    </main>
  )
}

export { heading }
