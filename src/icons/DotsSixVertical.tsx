import React from 'react';
import type { IconProps } from '../types';

const DotsSixVertical: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none">   <g class="DotsSixVertical" clip-path="url(#a)">     <g class="DotsSixVertical">       <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M8 6h.00635M8 12h.00635M8 18h.00635M15.9937 6H16m-.0063 6H16m-.0063 6H16" class="Vector"/>     </g>   </g>   <defs>     <clipPath id="a" class="a">       <path fill="#fff" d="M0 0h24v24H0z"/>     </clipPath>   </defs> </svg>
  );
};

export default DotsSixVertical;
