'use server'
import { TOPIC_KEY_HAIKU } from '@utils/constants'
import { createSubscriberAndAddToTopic } from '@utils/novu'

export default async function emailSubscribe(formData: FormData) {
	// get email from formData
	const email = formData.get('email')?.valueOf() as string
	if (!email) return
	await createSubscriberAndAddToTopic({ email, topicKey: TOPIC_KEY_HAIKU })
}