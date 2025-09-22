import React from 'react';
import type { IconProps } from '../types';

const Cancel: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none">   <g class="cancel">     <g class="cancel">       <path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M15.7494 15 9.75 9m.00064 6L15.75 9m7 3c0-5.52285-4.4772-10-10-10-5.52285 0-10 4.47715-10 10 0 5.5228 4.47715 10 10 10 5.5228 0 10-4.4772 10-10Z" class="Vector"/>     </g>   </g> </svg>
  );
};

export default Cancel;
