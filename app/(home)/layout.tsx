import { Container } from '@components/Container';
import { Logo } from '@components/Logo';
import Link from 'next/link';
import { PageControls } from '../components/client';
import '../globals.css';
import Providers from '../providers';

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
            <Container>
              <Link href="/"><Logo className='w-14 sm:w-20 h-14 sm:h-20 mb-6 hover:animate-spin' /></Link>
              {children}
            </Container>
          </>
        </Providers>
      </body>
    </html>
  )
}
