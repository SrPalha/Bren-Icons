import React from 'react';
import type { IconProps } from '../types';

const Navigation04: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M15.708 8.33c.943.935-.566 8.533-2.114 8.667-1.298.112-1.703-2.45-1.976-3.26-.27-.802-.57-1.09-1.365-1.353-2.019-.668-3.028-1.002-3.228-1.53-.53-1.4 7.479-3.717 8.683-2.523Z"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z"/> </svg>
  );
};

export default Navigation04;
