import { Inter } from 'next/font/google'
import { Introduction } from './components'
import { Cursor, Hero } from './components/index'

export default function Home() {
  return (
    <main>
      <div>
        <Hero>
          Nav is a perfectly cromulent product engineer, an aspiring indiehacker
          and chronic oversharer of all things mental health. <Cursor />
        </Hero>
      </div>
    </main>
  )
}
