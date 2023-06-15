import { Introduction } from '@components/Introduction'

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
