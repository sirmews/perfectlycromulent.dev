import React, { PropsWithChildren } from 'react'

type TextProps = {
	size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
	bold?: boolean
	className?: string
} & PropsWithChildren

// map size to tailwind class
const sizeMap = {
	xs: 'text-sm sm:text-base',
	sm: 'text-md sm:text-lg',
	md: 'text-xl sm:text-2xl',
	lg: 'text-3xl sm:text-5xl',
	xl: 'text-5xl sm:text-6xl',
}


export const Text: React.FC<TextProps> = ({ children, className, size, bold }) => {
	const sizeClass = size ? sizeMap[size] : sizeMap['md']
	const boldClass = bold ? 'font-semibold' : 'font-normal'
	return (
		<p className={`tracking-normal ${className} ${sizeClass} ${boldClass}`}>
			{children}
		</p>
	)
}
