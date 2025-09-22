import React from 'react';
import type { IconProps } from '../types';

const Shareknowledge: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M2 11c2.332-2.442 5.643-2.557 8 0M8.495 4.5c0 1.38-1.12 2.5-2.503 2.5a2.502 2.502 0 0 1-2.504-2.5c0-1.38 1.12-2.5 2.504-2.5a2.502 2.502 0 0 1 2.503 2.5ZM14 22c2.332-2.442 5.643-2.557 8 0m-1.505-6.5c0 1.38-1.12 2.5-2.504 2.5a2.502 2.502 0 0 1-2.503-2.5c0-1.38 1.12-2.5 2.503-2.5a2.502 2.502 0 0 1 2.504 2.5Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 14c0 3.87 3.13 7 7 7l-1-2m6-16h6m-6 3h6m-6 3h3.5"/> </svg>
  );
};

export default Shareknowledge;
