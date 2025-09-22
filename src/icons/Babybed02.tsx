import React from 'react';
import type { IconProps } from '../types';

const Babybed02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 7v8m4-8v8M8 7v8"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M22 17c-2.665 1.867-6.166 3-10 3-3.834 0-7.335-1.133-10-3"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20 18V6a2 2 0 0 1 2-2M4 18V6a2 2 0 0 0-2-2m2 3h16M4 15h16"/> </svg>
  );
};

export default Babybed02;
