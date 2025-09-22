import React from 'react';
import type { IconProps } from '../types';

const Xvariable: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20 3.5c-6.367 0-9.633 17-16 17"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 20.5c-1.618 0-2.426 0-3.108-.342a3.52 3.52 0 0 1-1.04-.8c-.53-.591-.82-1.438-1.401-3.13l-2.902-8.456c-.58-1.692-.87-2.539-1.4-3.13a3.517 3.517 0 0 0-1.04-.8C7.425 3.5 6.617 3.5 5 3.5"/> </svg>
  );
};

export default Xvariable;
