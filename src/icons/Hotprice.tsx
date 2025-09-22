import React from 'react';
import type { IconProps } from '../types';

const Hotprice: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="M12 22a8 8 0 0 0 8-8c0-6-8-12-8-12-.388 2.487-.768 3.822-2 6-1.2-.555-1.5-1-2-2.25C6 8 4 11 4 14a8 8 0 0 0 8 8Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m10 17 4-4"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 13h.009m3.982 4H14"/> </svg>
  );
};

export default Hotprice;
