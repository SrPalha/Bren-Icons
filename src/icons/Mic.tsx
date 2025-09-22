import React from 'react';
import type { IconProps } from '../types';

const Mic: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none">   <g class="mic">     <g class="mic">       <path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M17 7v4m0-4c0-2.76142-2.2386-5-5-5-2.76142 0-5 2.23858-5 5v4c0 2.7614 2.23858 5 5 5 2.7614 0 5-2.2386 5-5m0-4h-3m3 4h-3m6 0c0 4.4183-3.5817 8-8 8m0 0c-4.41828 0-8-3.5817-8-8m8 8v3m0 0h3m-3 0H9" class="Vector"/>     </g>   </g> </svg>
  );
};

export default Mic;
