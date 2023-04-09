import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Introduction } from '@components/Introduction'

const inter = Inter({ subsets: ['latin'] })

const HomeData = {
  title: 'Upcoming Dashboard...',
  description: 'Nothing to see here yet',
}

export default function Home() {
  const { title, description } = HomeData
  return (
    <main>
      <div>
        <Introduction title={title} description={description} />
      </div>
    </main>
  )
}
