import React from 'react';
import type { IconProps } from '../types';

const Share: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none">   <g class="share">     <g class="share">       <path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" d="m8.72852 10.7497 6.49998-2.99946M8.72852 13.2502l6.49998 2.9995M21 6.5c0 1.65685-1.3431 3-3 3s-3-1.34315-3-3 1.3431-3 3-3 3 1.34315 3 3ZM9 12c0 1.6569-1.34315 3-3 3s-3-1.3431-3-3 1.34315-3 3-3 3 1.3431 3 3Zm12 5.5c0 1.6569-1.3431 3-3 3s-3-1.3431-3-3 1.3431-3 3-3 3 1.3431 3 3Z" class="Vector"/>     </g>   </g> </svg>
  );
};

export default Share;
