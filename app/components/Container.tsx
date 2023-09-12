import React, { PropsWithChildren } from 'react'

export const Container: React.FC<PropsWithChildren> = ({ children }) => (
	<div className='max-w-7xl px-4 sm:px-10 lg:px-12 py-8 sm:py-12'>
		{children}
	</div>
)
