import React from 'react';
import type { IconProps } from '../types';

const Charthighlow: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M21 21H10c-3.3 0-4.95 0-5.975-1.025C3 18.95 3 17.3 3 14V3"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 7h2m6 0h2M8 15h2m6 0h2M10 5v12m8-12v12"/> </svg>
  );
};

export default Charthighlow;
