import { SubscribeForm } from '@components/SubscribeForm'

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {

	return (
		<>
			<SubscribeForm />
			<div className=''>
				{children}
			</div>
		</>
	)
}
