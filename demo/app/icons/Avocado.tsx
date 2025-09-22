import React from 'react';
import type { IconProps } from '../types';

const Avocado: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 5c0-1 .4-3 2-3m-2 16.041V13.96c0-.792.219-1.126 1.152-.88a2.99 2.99 0 0 1 0 5.841c-.933.247-1.152-.087-1.152-.879Z"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M12 5C9.607 5 7.667 6.79 7.667 9c0 1.224-.278 2.598-1.029 3.607A5.658 5.658 0 0 0 5.5 16c0 3.314 2.91 6 6.5 6s6.5-2.686 6.5-6c0-1.26-.42-2.428-1.138-3.393-.751-1.009-1.029-2.383-1.029-3.607 0-2.21-1.94-4-4.333-4Z"/> </svg>
  );
};

export default Avocado;
