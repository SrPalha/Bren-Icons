import React from 'react';
import type { IconProps } from '../types';

const Icon3dothorizontal: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none">   <g class="3dothorizontal">     <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M11.9959 12h.009m5.9949 0h.009M5.99982 12h.00898" class="3dothorizontal"/>   </g> </svg>
  );
};

export default Icon3dothorizontal;
