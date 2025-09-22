import React from 'react';
import type { IconProps } from '../types';

const Discount01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.144 2.5c-2.657.06-4.209.315-5.27 1.375-1.06 1.06-1.313 2.612-1.374 5.27M14.856 2.5c2.657.06 4.209.315 5.27 1.375 1.06 1.06 1.313 2.612 1.374 5.27M14.856 21.5c2.657-.06 4.209-.315 5.27-1.375 1.06-1.06 1.313-2.612 1.374-5.27M9.144 21.5c-2.657-.06-4.209-.315-5.27-1.375-1.06-1.06-1.313-2.612-1.374-5.27"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 8h.009M16 16h.009"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="m8 16 8-8"/> </svg>
  );
};

export default Discount01;
