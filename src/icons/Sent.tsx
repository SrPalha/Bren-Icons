import React from 'react';
import type { IconProps } from '../types';

const Sent: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M21.048 3.053C18.87.707 2.486 6.453 2.5 8.55c.015 2.379 6.398 3.11 8.167 3.607 1.064.299 1.349.604 1.594 1.72 1.111 5.052 1.67 7.566 2.94 7.622 2.027.09 7.972-16.158 5.847-18.447Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11.5 12.5 15 9"/> </svg>
  );
};

export default Sent;
