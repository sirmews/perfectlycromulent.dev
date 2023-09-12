import React from 'react'

type StyledLinkProps = {
	href: string
	children: React.ReactNode
	className?: string
	external?: boolean
}

export const StyledLink: React.FC<StyledLinkProps> = ({ href, children, className, external = true }) => (
	<a
		href={href}
		{...(external ? { rel: 'noreferrer noopener', target: '_blank' } : {})}
		className={`${className} cursor-pointer border-b-4 hover:bg-simpsons-yellow hover:text-gray-900`}
	>
		{children}
	</a >
)
