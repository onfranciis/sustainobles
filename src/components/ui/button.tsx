import React from 'react';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  // isLoading?: boolean;
}

const Button: React.FC<ButtonProps> = ({ onClick, children, disabled = false, className = '', ...props }) => {
	return (
		<button
			onClick={onClick}
			disabled={disabled}
			className={`px-3.5 py-2 h-fit inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm text-white font-medium bg-primary-gradient transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 ${className}`}
			{...props}
		>
			{children}
		</button>
	);
};

export default Button;