import React from 'react';
import type { IconProps } from '../types';

const Award03: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7.68 12.987c-.663-3.36-.994-5.04-.277-6.406.717-1.367 2.258-1.993 5.34-3.244l.627-.255c2.328-.946 3.492-1.419 4.195-.808.702.61.455 1.88-.04 4.42L15.32 18H8.669l-.989-5.013ZM6 21c0-1.414 0-2.121.44-2.56C6.878 18 7.585 18 9 18h6c1.414 0 2.121 0 2.56.44.44.439.44 1.146.44 2.56v1H6v-1Zm-2 1h16"/> </svg>
  );
};

export default Award03;
