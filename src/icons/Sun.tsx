import React from 'react';
import type { IconProps } from '../types';

const Sun: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none">   <g class="sun">     <g class="sun">       <path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M9 12c0-1.6569 1.3431-3 3-3m-3 3c0 1.6569 1.3431 3 3 3m-3-3H4m8-3c1.6569 0 3 1.3431 3 3m-3-3V4m3 8c0 1.6569-1.3431 3-3 3m3-3h5m-8 3v5m2.5976-9.5L18.9277 8m-9.52625 5.5L5.07133 16M13.5 14.5976l2.5 4.3301m-5.5-9.52625L8 5.07133m5.5 4.33106L16 5.07227m-5.5 9.52623L8 18.9287M14.5976 13.5l4.3301 2.5m-9.52624-5.5L5.07133 8" class="Vector"/>     </g>   </g> </svg>
  );
};

export default Sun;
