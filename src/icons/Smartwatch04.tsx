import React from 'react';
import type { IconProps } from '../types';

const Smartwatch04: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M4.5 12c0-3.287 0-4.931.908-6.038a4 4 0 0 1 .554-.554C7.07 4.5 8.712 4.5 12 4.5c3.287 0 4.931 0 6.038.908a4 4 0 0 1 .554.554C19.5 7.07 19.5 8.712 19.5 12c0 3.287 0 4.931-.908 6.038a4.001 4.001 0 0 1-.554.554c-1.107.908-2.75.908-6.038.908-3.287 0-4.931 0-6.038-.908a4 4 0 0 1-.554-.554C4.5 16.93 4.5 15.288 4.5 12Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M9 22h6M9 2h6"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m10 10 3 3m2-4-4 4"/> </svg>
  );
};

export default Smartwatch04;
