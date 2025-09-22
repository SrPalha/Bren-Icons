import React from 'react';
import type { IconProps } from '../types';

const Gasstove: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2 6c0-3.31.69-4 4-4h12c3.31 0 4 .69 4 4v12c0 3.31-.69 4-4 4H6c-3.31 0-4-.69-4-4V6Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M6 19h4"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 19.009V19"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 14a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M15.5 10H17m-5 3.5V15m-3.5-5H7m5-3.5V5"/> </svg>
  );
};

export default Gasstove;
