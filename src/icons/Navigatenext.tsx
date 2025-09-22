import React from 'react';
import type { IconProps } from '../types';

const Navigatenext: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none">   <g class="navigate_next">     <g class="navigate_next">       <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.00005 6S15 10.4189 15 12c0 1.5812-6 6-6 6" class="Vector"/>     </g>   </g> </svg>
  );
};

export default Navigatenext;
