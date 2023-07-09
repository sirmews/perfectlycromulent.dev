import { Inter } from 'next/font/google'
import { Introduction } from './components'
import { Cursor, Hero } from './components/index'

export default function Home() {
  return (
    <main className='flex h-screen'>
      <div className='space-y-12 pt-24'>
        <Hero>
          Nav is a perfectly cromulent product engineer, an aspiring indiehacker
          and chronic oversharer on all things mental health.
        </Hero>
        <Hero>
          Find him on{' '}
          <a
            href='https://www.linkedin.com/in/nav-rao/'
            rel='noreferrer noopener'
            target='_blank'
          >
            LinkedIn
          </a>
          ,{' '}
          <a
            href='https://theperfectlycromulent.substack.com/'
            rel='noreferrer noopener'
            target='_blank'
          >
            Substack
          </a>{' '}
          and{' '}
          <a
            href='https://github.com/sirmews'
            rel='noreferrer noopener'
            target='_blank'
          >
            Github
          </a>
          .<Cursor />
        </Hero>
      </div>
    </main>
  )
}
