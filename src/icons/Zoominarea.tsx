import React from 'react';
import type { IconProps } from '../types';

const Zoominarea: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.4 19.4 22 22m-1.3-7.15a5.85 5.85 0 1 0-11.7 0 5.85 5.85 0 0 0 11.7 0Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.075 19.075 22 22m-9.1-7.15h1.95m0 0h1.95m-1.95 0V12.9m0 1.95v1.95m5.85-1.95a5.85 5.85 0 1 0-11.7 0 5.85 5.85 0 0 0 11.7 0Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M2 6c.13-1.335.426-2.234 1.096-2.904C3.766 2.426 4.665 2.13 6 2m0 20c-1.335-.13-2.234-.426-2.904-1.096C2.426 20.234 2.13 19.335 2 18M22 6c-.13-1.335-.426-2.234-1.096-2.904C20.234 2.426 19.335 2.13 18 2M2 10v4M14 2h-4"/> </svg>
  );
};

export default Zoominarea;
