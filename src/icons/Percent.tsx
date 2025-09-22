import React from 'react';
import type { IconProps } from '../types';

const Percent: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M4 20 20 4"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M8.268 4.732a2.5 2.5 0 1 1-3.536 3.536 2.5 2.5 0 0 1 3.536-3.536Zm11 11a2.5 2.5 0 1 1-3.536 3.536 2.5 2.5 0 0 1 3.536-3.536Z"/> </svg>
  );
};

export default Percent;
