import React from 'react';

export interface SubHeroProps {
	children: React.ReactNode
	className?: string
}

export const SubHero: React.FC<SubHeroProps> = ({ children, className }) => {

	return (
		<div className={className}>
			<div className='mx-auto lg:mx-0'>
				<div className='font-semibold tracking-normal text-2xl sm:text-3xl md:text-4xl lg:text-5xl'>
					{children}
				</div>
			</div>
		</div>
	)
}
