import React from 'react';
import type { IconProps } from '../types';

const Kettle1: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path fill="#1B1C1B" d="M8 8v1h4V8a2 2 0 1 0-4 0Z" opacity=".4"/>   <path fill="#1B1C1B" d="M2 17c0 1.95.028 4 2.4 4h11.2c2.372 0 2.4-2.05 2.4-4a8 8 0 1 0-16 0Z" opacity=".4"/>   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="M2 17c0 1.95.028 4 2.4 4h11.2c2.372 0 2.4-2.05 2.4-4a8 8 0 1 0-16 0Z"/>   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="M8 9V8a2 2 0 1 1 4 0v1"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18 17a2 2 0 0 0 2-2v-2a2 2 0 0 1 2-2"/>   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="M16 11.5V9A6 6 0 0 0 4 9v2.5"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2 17h10"/> </svg>
  );
};

export default Kettle1;
