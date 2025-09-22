import React from 'react';
import type { IconProps } from '../types';

const Infinity02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M12 12s-1.643 3-3.3 3C7.043 15 6 13.657 6 12s1.043-3 2.7-3c1.657 0 3.3 3 3.3 3Zm0 0s1.643 3 3.3 3c1.657 0 2.7-1.343 2.7-3s-1.043-3-2.7-3c-1.657 0-3.3 3-3.3 3Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.725 2.5c1.39.154 2.325.501 3.023 1.287C22 5.197 22 7.464 22 12s0 6.804-1.252 8.213c-.698.786-1.634 1.133-3.023 1.287m-11.45 0c-1.39-.154-2.325-.501-3.023-1.287C2 18.803 2 16.536 2 12s0-6.804 1.252-8.213C3.95 3.001 4.886 2.654 6.275 2.5"/> </svg>
  );
};

export default Infinity02;
