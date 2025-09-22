import React from 'react';
import type { IconProps } from '../types';

const Gps1: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <g clip-path="url(#a)">     <path stroke="#1B1C1B" strokeWidth="1.5" d="M20.514 12a8.5 8.5 0 1 1-17 0 8.5 8.5 0 0 1 17 0Z"/>     <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M22.5 12h-2m-17 0h-2M12 1.5v2m0 17v2"/>     <path stroke="#1B1C1B" strokeWidth="1.5" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>   </g>   <defs>     <clipPath id="a">       <path fill="#fff" d="M0 0h24v24H0z"/>     </clipPath>   </defs> </svg>
  );
};

export default Gps1;
