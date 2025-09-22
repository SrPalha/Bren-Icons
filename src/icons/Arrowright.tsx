import React from 'react';
import type { IconProps } from '../types';

const Arrowright: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none">   <g class="arrowright">     <g class="arrowright">       <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20 12H4m16 0c0 1.3176-5 5-5 5m5-5c0-1.3176-5-5-5-5" class="Vector"/>     </g>   </g> </svg>
  );
};

export default Arrowright;
