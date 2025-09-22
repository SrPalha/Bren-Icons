import React from 'react';
import type { IconProps } from '../types';

const Lightmode: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none">   <g class="lightmode" clip-path="url(#a)">     <g class="lightmode">       <path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M12 2v1m0 18v1m10-10h-1M3 12H2m17.07-7.07-.392.393M5.322 18.678l-.393.393m14.141-.001-.392-.393M5.322 5.322l-.393-.393M18 12c0 3.3137-2.6863 6-6 6-3.31371 0-6-2.6863-6-6 0-3.31371 2.68629-6 6-6 3.3137 0 6 2.68629 6 6Z" class="Vector"/>     </g>   </g>   <defs>     <clipPath id="a" class="a">       <path fill="#fff" d="M0 0h24v24H0z"/>     </clipPath>   </defs> </svg>
  );
};

export default Lightmode;
