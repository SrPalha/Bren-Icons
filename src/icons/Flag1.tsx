import React from 'react';
import type { IconProps } from '../types';

const Flag1: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5.025 21c.019-1.736.019-3.446.012-5.08m0 0c-.024-5.459-.124-10.058.158-11.877.366-2.364 4.198-.213 8.775 1.555l2.063.89c1.518.653 3.686 1.816 2.733 3.173-.392.559-1.206 1.199-2.708 1.906L5.037 15.921Z"/> </svg>
  );
};

export default Flag1;
