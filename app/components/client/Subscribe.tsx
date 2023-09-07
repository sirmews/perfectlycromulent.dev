'use client'
import emailSubscribe from '@/app/actions/emailSubscribe';
import { Input } from '@components/client/Input';
import { Text } from '@components/Text';
import delay from '@utils/delay';
import React, { useEffect, useState } from 'react';

type SubscribeProps = {}

export const Subscribe: React.FC<SubscribeProps> = () => {
	const [showSubscribe, setShowSubscribe] = useState(false);
	const [message, setMessage] = useState('Subscribe to the latest Haiku drops.');
	const [disabled, setDisabled] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => {
			setShowSubscribe(true);
		}, 3000); // 3000 milliseconds = 3 seconds

		return () => clearTimeout(timer); // Cleanup timer on component unmount
	}, []);

	async function submitForm(formData: FormData) {
		setDisabled(true);
		await emailSubscribe(formData)
		setMessage('Thanks for subscribing!');
		// delay for 1 second before hiding the subscribe form
		await delay(1000);
		setShowSubscribe(false);
	}

	return (
		<>
			{showSubscribe && (
				<form action={submitForm}>
					<Text size='md' className='mb-3'>{message}</Text>
					<div className="relative flex flex-grow items-stretch focus-within:z-10">
						<Input id='email' label='Email' name='email' placeholder='Enter your email' type='email' required className="bg-black rounded-none rounded-tl-md rounded-bl-md" />
						<button
							type="submit"
							className="relative -ml-px inline-flex items-center gap-x-1.5 rounded-r-md px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 bg-white"
							disabled={disabled}
						>
							{disabled ? 'Submitting...' : 'Submit'}
						</button>
					</div>
					<p className='mt-2 italic text-xs text-gray-400'>Just the haikus, nothing more</p>
				</form>
			)}
		</>
	)
}