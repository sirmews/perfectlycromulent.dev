import { Introduction } from './components'
import data from './data.json'

const HomeData = {
  title: 'Home of Nav',
  description:
    'A perfectly cromulent product engineer, aspiring indiehacker, chronic oversharer of all things mental health',
  links: data.links,
}

export default function Home() {
  const { title, description, links } = HomeData
  return (
    <main>
      <div>
        <Introduction title={title} description={description} links={links} />
      </div>
    </main>
  )
}
