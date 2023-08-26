'use client'
import { Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/20/solid'
import React, { Fragment } from 'react'

type NotificationProps = {
	children?: React.ReactNode
}

export const NotificationPanel: React.FC<NotificationProps> = ({ children }) => {
	const [show, setShow] = React.useState(true)
	return (
		<div
			aria-live="assertive"
			className="pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-end sm:p-6"
		>
			<div className="flex w-full flex-col items-center space-y-4 sm:items-end">
				{/* Notification panel, dynamically insert this into the live region when it needs to be displayed */}
				<Transition
					show={show}
					appear={true}
					as={Fragment}
					enter="transform ease-out duration-500 transition"
					enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
					enterTo="translate-y-0 opacity-100 sm:translate-x-0"
					leave="transition ease-in duration-100"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
				>
					<div className="pointer-events-auto w-full max-w-sm overflow-hidden rounded-xl bg-neutral-950 text-white shadow-lg ring-1 ring-gray-400 ring-opacity-5">
						<div className="px-6 py-6">
							<div className="flex items-start">
								<div className="ml-2 w-0 flex-1">
									{children}
								</div>
								<div className="ml-4 flex flex-shrink-0">
									<button
										type="button"
										className="inline-flex rounded-lg  text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
										onClick={() => {
											setShow(false)
										}}
									>
										<span className="sr-only">Close</span>
										<XMarkIcon className="h-5 w-5" aria-hidden="true" />
									</button>
								</div>
							</div>
						</div>
					</div>
				</Transition>
			</div>
		</div>
	)
}
