import React from 'react';
import type { IconProps } from '../types';

const Moreverticalcircle1: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M13.5 4.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Zm0 7.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Zm0 7.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z"/> </svg>
  );
};

export default Moreverticalcircle1;
