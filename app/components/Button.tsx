import type { FunctionComponent, ReactElement } from "react";
import classNames from "classnames";

interface ButtonProps {
  children: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  icon?: ReactElement;
}

export const Button: FunctionComponent<ButtonProps> = ({
  children,
  onClick,
  variant = "primary",
  size = "md",
  icon,
}) => {
  const className = classNames(
    'rounded-md',
    'shadow-sm',
    'focus:outline-none',
    'focus:ring-2',
    'focus:ring-offset-2',
    'font-semibold',
    {
      'bg-indigo-600 hover:bg-indigo-500 focus:ring-indigo-600 text-white': variant === 'primary',
      'bg-white hover:bg-gray-50 focus:ring-gray-300 text-gray-900': variant === 'secondary',
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
    },
  );

  return (
    <button type="button" onClick={onClick} className={className}>
      {icon && (
        <span className="inline-flex items-center gap-x-1.5">{icon}</span>
      )}
      <span>{children}</span>
    </button>
  );
};
