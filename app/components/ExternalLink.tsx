import React from 'react'

type ExternalLinkProps = {
	href: string
	children: React.ReactNode
	className?: string
}

export const ExternalLink: React.FC<ExternalLinkProps> = ({ href, children, className }) => (
	<a
		href={href}
		rel='noreferrer noopener'
		target='_blank'
		className={`${className} border-b-4 hover:bg-white hover:text-gray-900`}
	>
		{children}
	</a >
)
