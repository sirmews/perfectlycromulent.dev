import { Button } from './'
import data from '../data.json'

export const Introduction = () => (
  <div className='bg-white py-24 sm:py-32'>
    <div className='mx-auto max-w-7xl px-6 lg:px-8'>
      <div className='mx-auto max-w-2xl lg:mx-0'>
        <h2 className='text-5xl font-bold tracking-tight text-gray-900 sm:text-7xl'>
          Home of Nav
        </h2>
        <p className='mt-6 text-3xl leading-10 text-gray-600'>
          A perfectly cromulent product engineer, aspiring indiehacker, chronic
          oversharer of all things mental health
        </p>
        {/* inline flex list of buttons */}
        <ul className='mt-8 flex flex-row space-x-2'>
          {data.links.map((link, index) => (
            <li key={index}>
              <Button href={link.url} variant='primary' size='lg'>
                {link.name}
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
)
