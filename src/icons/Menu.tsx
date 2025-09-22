import React from 'react';
import type { IconProps } from '../types';

const Menu: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none">   <g class="menu">     <g class="menu">       <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 5h16M4 12h16M4 19h16" class="Vector"/>     </g>   </g> </svg>
  );
};

export default Menu;
