import React from 'react';
import type { IconProps } from '../types';

const Locksync02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20 11h2c-.503-5.053-4.777-9-9.975-9C6.488 2 2 6.477 2 12s4.488 10 10.025 10c4.11 0 7.643-2.468 9.19-6"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M14.25 10.982V9.191C14.25 7.98 13.243 7 12 7s-2.25.98-2.25 2.19v1.792M12 17c-1.933 0-3.5-1.526-3.5-3.407 0-1.882 1.567-3.408 3.5-3.408s3.5 1.526 3.5 3.408C15.5 15.474 13.933 17 12 17Z"/> </svg>
  );
};

export default Locksync02;
