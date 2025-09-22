import React from 'react';
import type { IconProps } from '../types';

const Heart: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none">   <g class="heart" clip-path="url(#a)">     <g class="heart">       <path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M19.4626 3.99415c-2.6817-1.64492-5.0222-.98204-6.4282.07386-.5766.43295-.8648.64942-1.0344.64942-.1696 0-.4578-.21647-1.0344-.64942-1.40598-1.0559-3.74651-1.71878-6.42816-.07386C1.01807 6.15294.22172 13.2749 8.33953 19.2834 9.88572 20.4278 10.6588 21 12 21c1.3412 0 2.1143-.5722 3.6605-1.7166 8.1178-6.0085 7.3214-13.13046 3.8021-15.28925Z" class="Vector"/>     </g>   </g>   <defs>     <clipPath id="a" class="a">       <path fill="#fff" d="M0 0h24v24H0z"/>     </clipPath>   </defs> </svg>
  );
};

export default Heart;
