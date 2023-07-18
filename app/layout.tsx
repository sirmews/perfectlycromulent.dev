import { Analytics } from '@vercel/analytics/react';
import { PageControls } from './components/client';
import './globals.css';
import Providers from './providers';

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
      <body className='bg-white text-gray-900 dark:bg-neutral-900 dark:text-white'>
        <Providers>
          <>
            <PageControls />
            <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 '>
              {children}
            </div>
          </>
        </Providers>
        <Analytics />
      </body>
    </html>
  )
}
