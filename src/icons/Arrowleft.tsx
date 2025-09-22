import React from 'react';
import type { IconProps } from '../types';

const Arrowleft: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none">   <g class="arrowleft">     <g class="arrowleft">       <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 12h16M4 12c.00001 1.3176 4.99996 5 4.99996 5M4 12c-.00001-1.3176 5-5 5-5" class="Vector"/>     </g>   </g> </svg>
  );
};

export default Arrowleft;
