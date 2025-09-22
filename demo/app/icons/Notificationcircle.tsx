import React from 'react';
import type { IconProps } from '../types';

const Notificationcircle: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M22 5.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M21.95 11c.033.329.05.662.05 1 0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2c.338 0 .671.017 1 .05"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 10h4m-4 5h8"/> </svg>
  );
};

export default Notificationcircle;
