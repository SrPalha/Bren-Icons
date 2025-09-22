import React from 'react';
import type { IconProps } from '../types';

const Menu3dot: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none">   <g class="menu3dot">     <g class="menu3dot">       <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M11.992 12h.009m-.0168 6h.009m.0066-12h.009" class="Vector"/>     </g>   </g> </svg>
  );
};

export default Menu3dot;
