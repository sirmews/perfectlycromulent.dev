import { Text } from '@components/Text'
import React from 'react'

type HaikuTextProps = {
	text: string
}

/**
 * Split string into individual lines of text
 * @param haiku
 * @returns
 */
const splitHaiku = (haiku: string) => {
	// split haiku into lines
	const lines = haiku.split('/')
	return lines
}

export const HaikuText: React.FC<HaikuTextProps> = ({ text }) => (
	<Text size='lg' bold={true}>
		{splitHaiku(text).map((line, index) => (
			<React.Fragment key={index}>
				{line}
				<br />
			</React.Fragment>
		))}
	</Text>
)
