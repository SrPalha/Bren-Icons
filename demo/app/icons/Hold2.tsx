import React from 'react';
import type { IconProps } from '../types';

const Hold2: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M7.77 11.5V5.992c0-.825.668-1.494 1.491-1.494.823 0 1.49.669 1.49 1.494v1.98M7.771 6.89 4.999 9.836a2.808 2.808 0 0 0-.201 3.575l3.132 4.245c.275.373.413.83.389 1.294V20m2.427-14.128.003-.367c0-.831.671-1.505 1.5-1.505s1.5.674 1.5 1.505v2.87m0-1.876c0-.831.672-1.505 1.5-1.505.829 0 1.5.674 1.5 1.505v2.496m0-1.475c0-.832.672-1.505 1.5-1.505.83 0 1.501.673 1.501 1.505v6.006c0 .986-.157 2.574-1.311 3.876-.416.469-.73 1.042-.73 1.669V20"/> </svg>
  );
};

export default Hold2;
