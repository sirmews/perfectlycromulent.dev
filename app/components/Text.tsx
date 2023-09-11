import React, { PropsWithChildren } from 'react'

type TextProps = {
	size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
	bold?: boolean
	className?: string
} & PropsWithChildren

// map size to tailwind class
const sizeMap = {
	xs: 'text-xs sm:text-sm md:text-base lg:text-lg',
	sm: 'text-lg sm:text-xl md:text-2xl lg:text-3xl',
	md: 'text-lg sm:text-xl md:text-2xl lg:text-2xl',
	lg: 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl',
	xl: 'text-3xl sm:text-4xl md:text-5xl lg:text-6xl',
}


export const Text: React.FC<TextProps> = ({ children, className, size, bold }) => {
	const sizeClass = size ? sizeMap[size] : sizeMap['md']
	const boldClass = bold ? 'font-semibold' : 'font-normal'
	return (
		<p className={`tracking-normal ${sizeClass} ${boldClass} ${className}`}>
			{children}
		</p>
	)
}
