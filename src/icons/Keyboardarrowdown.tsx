import React from 'react';
import type { IconProps } from '../types';

const Keyboardarrowdown: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none">   <g class="Keyboardarrowdown" clip-path="url(#a)">     <g class="Keyboardarrowdown">       <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18 9.00005S13.5811 15 12 15c-1.5812 0-6-6-6-6" class="Vector"/>     </g>   </g>   <defs>     <clipPath id="a" class="a">       <path fill="#fff" d="M0 0h24v24H0z"/>     </clipPath>   </defs> </svg>
  );
};

export default Keyboardarrowdown;
