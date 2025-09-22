import React from 'react';
import type { IconProps } from '../types';

const Upload: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none">   <g class="upload">     <g class="upload">       <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 4.5v10m0-10c-.7002 0-2.00847 1.9943-2.5 2.5M12 4.5c.7002 0 2.0085 1.9943 2.5 2.5m5.5 9.5c0 2.482-.518 3-3 3H7c-2.482 0-3-.518-3-3" class="Vector"/>     </g>   </g> </svg>
  );
};

export default Upload;
