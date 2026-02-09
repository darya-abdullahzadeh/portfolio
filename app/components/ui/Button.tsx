import Link from 'next/link';
import { type ReactNode } from 'react';

interface ButtonProps {
    children: ReactNode;
    href?: string;
    variant?: 'primary' | 'secondary' | 'outline';
    className?: string;
    onClick?: () => void;
    type?: 'button' | 'submit';
    target?: string;
    rel?: string;
}

export default function Button({
    children,
    href,
    variant = 'primary',
    className = '',
    onClick,
    type = 'button',
    target,
    rel,
}: ButtonProps) {
    const baseStyles =
        'inline-flex items-center justify-center rounded-lg px-8 py-3.5 text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50';

    const variants = {
        primary:
            'bg-accent text-white hover:bg-white hover:text-black shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/35 hover:-translate-y-0.5 active:translate-y-0 dark:bg-accent dark:hover:bg-white dark:hover:text-black',
        secondary:
            'bg-neutral-100 text-neutral-900 hover:bg-white hover:text-black shadow-sm hover:shadow-md dark:bg-neutral-800 dark:text-neutral-100 dark:hover:bg-white dark:hover:text-black',
        outline:
            'bg-transparent border border-white text-white hover:bg-white hover:text-black shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/35 hover:-translate-y-0.5 active:translate-y-0 dark:bg-accent dark:hover:bg-white dark:hover:text-black',
    };

    const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

    console.log('variant:', variant, 'combinedClassName:', combinedClassName);

    if (href) {
        return (
            <Link href={href} className={combinedClassName} target={target} rel={rel}>
                {children}
            </Link>
        );
    }

    return (
        <button type={type} className={combinedClassName} onClick={onClick}>
            {children}
        </button>
    );
}

