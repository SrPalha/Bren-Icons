import React from 'react';
import type { IconProps } from '../types';

const Checksmall: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none">   <g class="check_small">     <g class="check_small">       <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m6.75 13.5 2.625 2.625 7.875-8.25" class="Vector"/>     </g>   </g> </svg>
  );
};

export default Checksmall;
