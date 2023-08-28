import { Introduction } from '@components/Introduction'
import { supabase } from '@utils/supabase'
import { notFound } from 'next/navigation'

const LinksPageData = {
  title: '[WIP] Reading List',
  description: "I'll get through these eventually.",
}

export default async function Links() {
  const { title, description } = LinksPageData
  const projectUserId = process.env.SUPABASE_USER_ID || ''

  const { data: links } = await supabase
    .from('links')
    .select('id, url, created_at')
    .match({ user_id: projectUserId, public: true })
    .order('created_at', { ascending: false })
    .limit(10)

  if (!links) {
    notFound()
  }

  return (
    <>
      <Introduction title={title} description={description} />
      <div className='mx-auto max-w-7xl px-2 lg:px-6'>
        <div className='mx-auto max-w-2xl lg:mx-0'>
          <ul className='space-y-2'>
            {links &&
              links.map((link) => (
                <li key={link.id} className='overflow-hidden'>
                  <a href={link.url} className='text-ellipsis ...'>
                    {link.url}
                  </a>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </>
  )
}
