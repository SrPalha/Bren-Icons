import React from 'react';
import type { IconProps } from '../types';

const Presentation01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M2.5 11c0 2.828 0 4.243.879 5.121C4.257 17 5.672 17 8.5 17h7c2.828 0 4.243 0 5.121-.879.879-.878.879-2.293.879-5.121V8c0-2.828 0-4.243-.879-5.121C19.743 2 18.328 2 15.5 2h-7c-2.828 0-4.243 0-5.121.879C2.5 3.757 2.5 5.172 2.5 8v3Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m7 22 5-3 5 3"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M12 17v5"/> </svg>
  );
};

export default Presentation01;
