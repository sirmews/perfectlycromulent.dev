'use client'
import { Input } from '@components/client/Input'
import { NotificationPanel } from '@components/client/NotificationPanel'
import React, { FormHTMLAttributes, useEffect, useState } from 'react'

type SubscribeProps = {
	action: FormHTMLAttributes<HTMLFormElement>['action']
}

export const Subscribe: React.FC<SubscribeProps> = ({ action }) => {
	const [showSubscribe, setShowSubscribe] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => {
			setShowSubscribe(true);
		}, 3000); // 3000 milliseconds = 3 seconds

		return () => clearTimeout(timer); // Cleanup timer on component unmount
	}, []);

	return (
		<>
			{showSubscribe && (
				<NotificationPanel>
					<form action={action}>
						<p className='mb-3'>Subscribe to the latest Haiku drops.</p>
						<div className="relative flex flex-grow items-stretch focus-within:z-10">
							<Input id='email' label='Email' name='email' placeholder='Enter your email' type='email' required className="bg-black rounded-none rounded-tl-md rounded-bl-md" />
							<button
								type="submit"
								className="relative -ml-px inline-flex items-center gap-x-1.5 rounded-r-md px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 bg-white"
							>
								Submit
							</button>
						</div>
						<p className='mt-2 italic text-xs text-gray-400'>Just the haikus, nothing more</p>
					</form>
				</NotificationPanel>
			)}
		</>
	)
}