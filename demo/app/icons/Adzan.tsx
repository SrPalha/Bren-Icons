import React from 'react';
import type { IconProps } from '../types';

const Adzan: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6.593 12c-3.857-5.714 3.573-7.5 5.406-10 1.833 2.5 9.262 4.286 5.403 10H6.592ZM12 16v2"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6.5 12v4.286c0 2.694 0 4.04.805 4.877C8.111 22 9.407 22 12 22c2.593 0 3.89 0 4.695-.837.805-.837.805-2.183.805-4.877V12m2.5 2 1-.5M20 18l1 .5M4 14l-1-.5M4 18l-1 .5"/> </svg>
  );
};

export default Adzan;
