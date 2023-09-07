import { Text } from '@components/Text'
import { splitHaiku } from '@utils/haiku'
import React from 'react'

type HaikuTextProps = {
	text: string
	className?: string
}

export const HaikuText: React.FC<HaikuTextProps> = ({ text, className }) => (
	<Text size='lg' bold={true} className={`${className}`}>
		{splitHaiku(text).map((line, index) => (
			<React.Fragment key={index}>
				{line}
				<br />
			</React.Fragment>
		))}
	</Text>
)
