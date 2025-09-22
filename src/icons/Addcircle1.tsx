import React from 'react';
import type { IconProps } from '../types';

const Addcircle1: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none">   <g class="add_circle" clip-path="url(#a)">     <g class="add_circle">       <path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M12 8v8m4-4H8m14 0c0-5.52285-4.4772-10-10-10C6.47715 2 2 6.47715 2 12c0 5.5228 4.47715 10 10 10 5.5228 0 10-4.4772 10-10Z" class="Vector"/>     </g>   </g>   <defs>     <clipPath id="a" class="a">       <path fill="#fff" d="M0 0h24v24H0z"/>     </clipPath>   </defs> </svg>
  );
};

export default Addcircle1;
