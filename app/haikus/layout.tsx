import { Subscribe } from '@components/Subscribe'
import { createSubscriberAndAddToTopic } from '@utils/novu'
import { TOPIC_KEY_HAIKU } from '../utils/constants'

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	async function submit(formData: FormData) {
		'use server'
		// get email from formData
		const email = formData.get('email')?.valueOf() as string
		if (!email) return
		await createSubscriberAndAddToTopic({ email, topicKey: TOPIC_KEY_HAIKU })
	}
	return (
		<>
			<Subscribe action={submit} />
			<div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 '>
				{children}
			</div>
		</>
	)
}
