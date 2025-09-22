import React from 'react';
import type { IconProps } from '../types';

const Keyboardreturn: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none">   <g class="keyboard_return">     <g class="keyboard_return">       <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11 6h4.5c2.4853 0 4.5 2.01472 4.5 4.5 0 2.4853-2.0147 4.5-4.5 4.5H4m0 0c.00001-.7905 2.99998-3 2.99998-3M4 15c-.00001.7906 3 3 3 3" class="Vector"/>     </g>   </g> </svg>
  );
};

export default Keyboardreturn;
