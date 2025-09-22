import React from 'react';
import type { IconProps } from '../types';

const Building02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="M15 2H9c-3.31 0-4 .69-4 4v16h14V6c0-3.31-.69-4-4-4Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 22h18"/>   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="M15 22v-3c0-1.655-.345-2-2-2h-2c-1.655 0-2 .345-2 2v3"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M13.5 6h-3m3 3.5h-3m3 3.5h-3"/> </svg>
  );
};

export default Building02;
