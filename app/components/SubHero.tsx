import React from 'react'

export interface SubHeroProps {
	children: React.ReactNode
	className?: string
}

export const SubHero: React.FC<SubHeroProps> = ({ children, className }) => {

	return (
		<div className={className}>
			<div className='mx-auto max-w-7xl px-2 lg:px-6'>
				<div className='mx-auto lg:mx-0'>
					<div className='text-3xl font-semibold tracking-normal sm:text-6xl'>
						{children}
					</div>
				</div>
			</div>
		</div>
	)
}
