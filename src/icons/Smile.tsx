import React from 'react';
import type { IconProps } from '../types';

const Smile: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none">   <g class="smile">     <g class="smile">       <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 15c.91212 1.2144 2.3643 2 4 2s3.0879-.7856 4-2M8.00897 9H8m8 0h-.009M22 12c0 5.5228-4.4772 10-10 10-5.52285 0-10-4.4772-10-10C2 6.47715 6.47715 2 12 2c5.5228 0 10 4.47715 10 10Z" class="Vector"/>     </g>   </g> </svg>
  );
};

export default Smile;
