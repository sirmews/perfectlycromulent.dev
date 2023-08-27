import { SubscribeForm } from '@components/SubscribeForm'

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {

	return (
		<>
			<SubscribeForm />
			<div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 '>
				{children}
			</div>
		</>
	)
}
