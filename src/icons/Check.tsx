import React from 'react';
import type { IconProps } from '../types';

const Check: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none">   <g class="check">     <g class="check">       <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m5 14 3.5 3.5L19 6.5" class="Vector"/>     </g>   </g> </svg>
  );
};

export default Check;
