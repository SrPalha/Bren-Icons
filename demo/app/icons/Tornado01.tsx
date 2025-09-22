import React from 'react';
import type { IconProps } from '../types';

const Tornado01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M20 7c0 2.21-3.582 4-8 4S4 9.21 4 7s3.582-4 8-4 8 1.79 8 4Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M18 14c0 1.657-2.686 3-6 3s-6-1.343-6-3 2.686-3 6-3m4 8c0 1.105-1.79 2-4 2s-4-.895-4-2 1.79-2 4-2"/> </svg>
  );
};

export default Tornado01;
