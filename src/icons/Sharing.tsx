import React from 'react';
import type { IconProps } from '../types';

const Sharing: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M15 16a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.5 5H20c.942 0 1.414 0 1.706.293C22 5.586 22 6.057 22 7v2.5M16 11l5.5-5.5M6.5 5H4c-.943 0-1.414 0-1.707.293C2 5.586 2 6.057 2 7v2.5M8 11 2.5 5.5"/> </svg>
  );
};

export default Sharing;
