import React from 'react';
import type { IconProps } from '../types';

const Keyboardleft: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none">   <g class="keyboardleft">     <g class="keyboardleft">       <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 6s-5.99999 4.4189-6 6c-.00001 1.5812 6 6 6 6" class="Vector"/>     </g>   </g> </svg>
  );
};

export default Keyboardleft;
