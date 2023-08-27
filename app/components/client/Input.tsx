'use client'

type InputProps = {
	children?: React.ReactNode
	id: string
	label: string
	name: string
	placeholder: string
	type: 'text' | 'email' | 'password' | 'number'
	required?: boolean
	className?: string
	disabled?: boolean
}

export const Input: React.FC<InputProps> = ({ id, placeholder, type, name, label, className, required, disabled }) => {
	return (
		<div className='flex flex-1'>
			<label htmlFor={id} className={`block text-sm font-medium leading-6 text-gray-900 ${label && 'sr-only'}`}>
				{/* use name and capitalize if there's no explicit label */}
				{label ? label : name.charAt(0).toUpperCase() + name.slice(1)}
			</label>
			<input
				id={id}
				type={type}
				name={name}
				className={`block w-full rounded-lg border-0 px-2.5 py-1.5 text-white ring-1 ring-inset ring-gray-400 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6 bg-transparent outline-none ${className} ${disabled && 'opacity-50'}}`}
				placeholder={placeholder ?? ''}
				required={required ?? false}
			/>
		</div>
	)
}