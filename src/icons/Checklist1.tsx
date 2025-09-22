import React from 'react';
import type { IconProps } from '../types';

const Checklist1: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none">   <g class="check-list">     <g class="check-list">       <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11 6h10m-10 6h10m-10 6h10M3 7.39286S4 8.04466 4.5 9C4.5 9 6 5.25 8 4M3 18.3929S4 19.0447 4.5 20c0 0 1.5-3.75 3.5-5" class="Vector"/>     </g>   </g> </svg>
  );
};

export default Checklist1;
