import { Text } from '@components/Text';
import { formatDate } from '@utils/date';
import Link from 'next/link';
import React from 'react';

export interface IHaiku {
  id: string
  haiku: string
  date: string
}

export interface HaikuProps {
  haiku: IHaiku
  className?: string
}

/**
 * Split string into individual lines of text
 * @param haiku
 * @returns
 */
const splitHaiku = (haiku: string) => {
  // split haiku into lines
  const lines = haiku.split('/')
  return lines
}

export const Haiku: React.FC<HaikuProps> = ({ haiku, className }) => {
  // get haiku from props as text

  const { haiku: text, id, date } = haiku

  return (
    <div className={className} id={id}>
      <div>
        <Link
          href={`/haikus/${id}`}
        >
          <Text size='lg' bold={true}>
            {splitHaiku(text).map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </Text>
        </Link>
        <Text size='xs'>
          <time className='block text-gray-400 py-3' suppressHydrationWarning>
            {formatDate(date)}
          </time>
        </Text>
      </div>
    </div>
  )
}
