import React from 'react';
import type { IconProps } from '../types';

const Apricot: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M10.201 20c1.146 1.245 2.651 2 4.3 2 3.59 0 6.5-3.582 6.5-8s-2.91-8-6.5-8C11.186 6 8.4 9.054 8 13"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M12 21.387A5.446 5.446 0 0 1 9.5 22C5.91 22 3 18.418 3 14s2.91-8 6.5-8c.886 0 1.73.218 2.5.613"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6c0-1.333.6-4 3-4"/> </svg>
  );
};

export default Apricot;
