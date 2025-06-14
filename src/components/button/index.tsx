import React from 'react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary';
};

const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'primary',
    ...props
}) => {


    
    const baseStyle =
        'px-4 py-2 rounded font-semibold focus:outline-none transition-colors';
    const variantStyle =
        variant === 'primary'
            ? 'bg-blue-600 text-white hover:bg-blue-700'
            : 'bg-gray-200 text-gray-800 hover:bg-gray-300';

    return (
        <button className={`${baseStyle} ${variantStyle}`} {...props}>
            {children}
        </button>
    );
};

export default Button;