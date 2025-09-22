import React from 'react';
import type { IconProps } from '../types';

const Unlink05: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M13.5 17H17a5 5 0 0 0 0-10h-3.5m-3 10H7A5 5 0 0 1 7 7h3.5"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.5 21 14 19.5M8.5 21l1.5-1.5M8.5 3 10 4.5M15.5 3 14 4.5"/> </svg>
  );
};

export default Unlink05;
