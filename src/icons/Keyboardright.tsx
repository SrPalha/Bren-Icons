import React from 'react';
import type { IconProps } from '../types';

const Keyboardright: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none">   <g class="keyboardright">     <g class="keyboardright">       <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11 6s6 4.4189 6 6c0 1.5812-6 6-6 6" class="Vector"/>     </g>   </g> </svg>
  );
};

export default Keyboardright;
