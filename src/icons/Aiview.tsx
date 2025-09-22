import React from 'react';
import type { IconProps } from '../types';

const Aiview: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.75 2.75 7 5v3M4.75 3.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm14.5-.75L17 5v3m2.25-4.5a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 2.75V7m0-3.5A.75.75 0 1 0 12 2a.75.75 0 0 0 0 1.5Z"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M15 16a3 3 0 1 0-6 0 3 3 0 0 0 6 0Z"/>   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="M12 10c6 0 10 6 10 6s-4 6-10 6-10-6-10-6 4-6 10-6Z"/> </svg>
  );
};

export default Aiview;
