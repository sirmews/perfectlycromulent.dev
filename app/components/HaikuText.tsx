import { Text } from '@components/Text'
import { splitHaiku } from '@utils/haiku'
import React from 'react'

type HaikuTextProps = {
	text: string
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
