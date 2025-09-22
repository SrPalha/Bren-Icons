import React from 'react';
import type { IconProps } from '../types';

const Add: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none">   <g class="add">     <g class="add">       <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 4v16m-8-8h16" class="Vector"/>     </g>   </g> </svg>
  );
};

export default Add;
