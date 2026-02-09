import { type ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = '', hover = false }: CardProps) {
  const baseStyles =
    'rounded-xl border border-card-border bg-transparent p-6 transition-all';
  const hoverStyles = hover
    ? 'hover:border-accent hover:shadow-xl hover:shadow-accent/10 hover:-translate-y-2'
    : '';

  return <div className={`${baseStyles} ${hoverStyles} ${className}`}>{children}</div>;
}

