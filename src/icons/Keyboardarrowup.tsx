import React from 'react';
import type { IconProps } from '../types';

const Keyboardarrowup: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none">   <g class="Keyboardarrowup" clip-path="url(#a)">     <g class="Keyboardarrowup">       <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18 15s-4.4189-5.99999-6-6c-1.5812-.00001-6 6-6 6" class="Vector"/>     </g>   </g>   <defs>     <clipPath id="a" class="a">       <path fill="#fff" d="M0 0h24v24H0z"/>     </clipPath>   </defs> </svg>
  );
};

export default Keyboardarrowup;
