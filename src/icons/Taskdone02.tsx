import React from 'react';
import type { IconProps } from '../types';

const Taskdone02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.5 13V9.368c0-3.473 0-5.21-1.025-6.289C17.45 2 15.8 2 12.5 2h-3C6.2 2 4.55 2 3.525 3.08 2.5 4.157 2.5 5.894 2.5 9.367v5.264c0 3.473 0 5.21 1.025 6.289C4.55 22 6.2 22 9.5 22H11m2.5-2s1 0 2 2c0 0 3.177-5 6-6"/>   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="m7 2 .082.493c.2 1.197.3 1.796.72 2.152C8.22 5 8.827 5 10.041 5h1.917c1.213 0 1.82 0 2.24-.355.42-.356.52-.955.719-2.152L15 2"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M7 16h4m-4-5h8"/> </svg>
  );
};

export default Taskdone02;
