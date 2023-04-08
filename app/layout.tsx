import './globals.css'
import { PageControls } from './components/client'

export const metadata = {
  title: 'Nav is Perfectly Cromulent',
  description:
    'A homepage for all things Nav, a perfectly cromulent product engineer.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className='bg-white text-gray-900 dark:bg-slate-900 dark:text-white'>
        <>
          <PageControls />
        </>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 '>
          {children}
        </div>
      </body>
    </html>
  )
}
