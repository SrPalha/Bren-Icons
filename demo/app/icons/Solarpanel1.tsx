import React from 'react';
import type { IconProps } from '../types';

const Solarpanel1: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.675 4h-7.35c-1.464 0-2.196 0-2.762.413-.567.412-.84 1.143-1.383 2.604l-.893 2.4c-1.11 2.983-1.665 4.474-1 5.528C2.95 16 4.445 16 7.433 16h9.134c2.988 0 4.482 0 5.146-1.055.665-1.054.11-2.545-1-5.528l-.893-2.4c-.544-1.461-.816-2.192-1.383-2.604C17.872 4 17.139 4 15.675 4ZM12 16v4m0 0h3m-3 0H9m1-16L8 16m6-12 2 12m4.5-6h-17"/> </svg>
  );
};

export default Solarpanel1;
