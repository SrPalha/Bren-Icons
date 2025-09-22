import React from 'react';
import type { IconProps } from '../types';

const Gpsoff1: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <g clip-path="url(#a)">     <path stroke="#1B1C1B" strokeWidth="1.5" d="M18.017 18.017a8.5 8.5 0 0 1-12.02-12.02"/>     <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M22.5 12h-2m-17 0h-2M12 1.5v2m0 17v2M2 2l20 20"/>     <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M8.336 4.323a8.57 8.57 0 0 1 3.678-.823c4.695 0 8.5 3.75 8.5 8.375a8.24 8.24 0 0 1-.834 3.625"/>   </g>   <defs>     <clipPath id="a">       <path fill="#fff" d="M0 0h24v24H0z"/>     </clipPath>   </defs> </svg>
  );
};

export default Gpsoff1;
