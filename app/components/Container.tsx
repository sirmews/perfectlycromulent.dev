import React, { PropsWithChildren } from 'react'

export const Container: React.FC<PropsWithChildren> = ({ children }) => (
	<div className='max-w-7xl px-4 sm:px-10 lg:px-12 pt-8 pb-12 sm:pt-12 pb-20'>
		{children}
	</div>
)
