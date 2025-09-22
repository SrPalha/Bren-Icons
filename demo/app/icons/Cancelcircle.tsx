import React from 'react';
import type { IconProps } from '../types';

const Cancelcircle: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 25 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m15.75 15-6-6m0 6 6-6"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M22.75 12c0-5.523-4.477-10-10-10s-10 4.477-10 10 4.477 10 10 10 10-4.477 10-10Z"/> </svg>
  );
};

export default Cancelcircle;
