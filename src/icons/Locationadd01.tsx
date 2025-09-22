import React from 'react';
import type { IconProps } from '../types';

const Locationadd01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M13.618 21.367A2.366 2.366 0 0 1 12 22a2.366 2.366 0 0 1-1.617-.633C6.412 17.626 1.09 13.447 3.685 7.38 5.09 4.1 8.458 2 12.001 2c3.543 0 6.912 2.1 8.315 5.38 2.592 6.06-2.717 10.259-6.698 13.987Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M15.5 11H12m0 0H8.5m3.5 0v3.5m0-3.5V7.5"/> </svg>
  );
};

export default Locationadd01;
