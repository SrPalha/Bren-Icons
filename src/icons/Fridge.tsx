import React from 'react';
import type { IconProps } from '../types';

const Fridge: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M12 2c3.771 0 5.657 0 6.828 1.172C20 4.343 20 6.229 20 10v4c0 3.771 0 5.657-1.172 6.828C17.657 22 15.771 22 12 22c-3.771 0-5.657 0-6.828-1.172C4 19.657 4 17.771 4 14v-4c0-3.771 0-5.657 1.172-6.828C6.343 2 8.229 2 12 2Zm-8 8h16"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 6h.009"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M8 17v-3"/> </svg>
  );
};

export default Fridge;
