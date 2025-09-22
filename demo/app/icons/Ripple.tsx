import React from 'react';
import type { IconProps } from '../types';

const Ripple: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6.5 13.5a3 3 0 0 0 5.5 1.659 3 3 0 1 0 2.823-4.642 3 3 0 1 0-5.646 0A3 3 0 0 0 6.5 13.5Z"/> </svg>
  );
};

export default Ripple;
