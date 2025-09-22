import React from 'react';
import type { IconProps } from '../types';

const Close: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none">   <g class="close">     <g class="close">       <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 5 5 19M5 5l14 14" class="Vector"/>     </g>   </g> </svg>
  );
};

export default Close;
