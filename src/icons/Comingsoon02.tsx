import React from 'react';
import type { IconProps } from '../types';

const Comingsoon02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M20.5 13.5a8.5 8.5 0 1 1-17 0 8.5 8.5 0 0 1 17 0Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M12 19a5.5 5.5 0 1 1 0-11m1.5-4.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 13.5 15 9"/> </svg>
  );
};

export default Comingsoon02;
