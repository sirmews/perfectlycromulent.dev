import { Text } from '@components/Text';
import React from 'react';

export interface SubHeroProps {
	children: React.ReactNode
	className?: string
}

export const SubHero: React.FC<SubHeroProps> = ({ children, className }) => {

	return (
		<div className={className}>
			<div className='mx-auto lg:mx-0'>
				<Text size='lg' bold={true}>
					{children}
				</Text>
			</div>
		</div>
	)
}
