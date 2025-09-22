import React from 'react';
import type { IconProps } from '../types';

const Desk02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M22 4H2m19 4H3m18 4h-7m7 4h-3c-1.886 0-2.828 0-3.414-.586C14 14.828 14 13.886 14 12V8M3 4v16M21 4v16"/> </svg>
  );
};

export default Desk02;
