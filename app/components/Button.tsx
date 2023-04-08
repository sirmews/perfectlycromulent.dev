import type { FunctionComponent, ReactElement } from 'react'
import classNames from 'classnames'

interface ButtonProps {
  children: string
  onClick?: () => void
  variant?: 'primary' | 'secondary'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  icon?: ReactElement
  href?: string
}

export const Button: FunctionComponent<ButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  icon,
  href,
}) => {
  const isLink = typeof href !== 'undefined'
  const Component = isLink ? 'a' : 'button'

  const className = classNames(
    'rounded-md',
    'shadow-sm',
    'focus:outline-none',
    'focus:ring-2',
    'focus:ring-offset-2',
    'font-semibold',
    {
      'bg-slate-900 dark:bg-white hover:bg-slate-700 dark:hover:bg-slate-300 focus:ring-slate-900 text-white dark:text-slate-900':
        variant === 'primary',
      'bg-white dark:bg-slate-900 hover:bg-gray-50 dark:hover:bg-slate-700 focus:ring-gray-300 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300':
        variant === 'secondary',
      'text-xs': size === 'xs',
      'text-sm': size === 'sm' || size === 'md',
      'text-base': size === 'lg',
      'text-lg': size === 'xl',
      'px-2': size === 'xs' || size === 'sm',
      'px-3': size === 'md' || size === 'lg',
      'px-4': size === 'xl',
      'py-1': size === 'xs' || size === 'sm',
      'py-2': size === 'md' || size === 'lg',
      'py-3': size === 'xl',
    }
  )

  return (
    <Component
      type={isLink ? undefined : 'button'}
      href={href}
      onClick={onClick}
      className={className}
    >
      {icon && (
        <span className='inline-flex items-center gap-x-1.5'>{icon}</span>
      )}
      <span>{children}</span>
    </Component>
  )
}
