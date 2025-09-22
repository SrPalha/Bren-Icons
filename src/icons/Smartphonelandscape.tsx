import React from 'react';
import type { IconProps } from '../types';

const Smartphonelandscape: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M9 19c-3.3 0-4.95 0-5.975-1.025C2 16.95 2 15.3 2 12s0-4.95 1.025-5.975C4.05 5 5.7 5 9 5h6c3.3 0 4.95 0 5.975 1.025C22 7.05 22 8.7 22 12s0 4.95-1.025 5.975C19.95 19 18.3 19 15 19H9Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 13v-2"/>   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="m2 15 .534-.089c1.207-.201 1.784-.308 2.132-.739C5 13.76 5 13.173 5 12c0-1.224-.01-1.81-.378-2.225-.352-.397-.93-.493-2.088-.686L2 9"/> </svg>
  );
};

export default Smartphonelandscape;
