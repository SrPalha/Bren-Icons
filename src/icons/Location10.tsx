import React from 'react';
import type { IconProps } from '../types';

const Location10: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M15 9.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M12 2c4.059 0 7.5 3.428 7.5 7.587 0 4.225-3.497 7.19-6.727 9.206a1.548 1.548 0 0 1-1.546 0C8.003 16.757 4.5 13.827 4.5 9.587 4.5 5.428 7.941 2 12 2Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M18 20c0 1.105-2.686 2-6 2s-6-.895-6-2"/> </svg>
  );
};

export default Location10;
