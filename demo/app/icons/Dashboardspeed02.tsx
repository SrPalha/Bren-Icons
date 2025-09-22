import React from 'react';
import type { IconProps } from '../types';

const Dashboardspeed02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M12 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M12 15v-5m10 3c0-5.523-4.477-10-10-10S2 7.477 2 13"/> </svg>
  );
};

export default Dashboardspeed02;
