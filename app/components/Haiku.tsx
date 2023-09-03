import { HaikuText } from '@components/HaikuText';
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


export const Haiku: React.FC<HaikuProps> = ({ haiku, className }) => {
  // get haiku from props as text

  const { haiku: text, id, date } = haiku

  return (
    <div className={className} id={id}>
      <div>
        <Link
          href={`/haikus/${id}`}
        >
          <HaikuText text={text} />
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
