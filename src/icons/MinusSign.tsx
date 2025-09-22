import React from 'react';
import type { IconProps } from '../types';

const Minussign: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none">   <g class="minus-sign">     <g class="minus-sign">       <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.3333 12H6.66666" class="Vector"/>     </g>   </g> </svg>
  );
};

export default Minussign;
