import React from 'react';
import type { IconProps } from '../types';

const Moon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none">   <g class="moon">     <g class="moon">       <path stroke="currentColor" strokeWidth="1.5" d="M8.5 2.62964C12.2967 4.04837 15 7.7085 15 12c0 4.2916-2.7033 7.9517-6.5 9.3704M22 12c0 5.5228-4.4772 10-10 10-5.52285 0-10-4.4772-10-10C2 6.47715 6.47715 2 12 2c5.5228 0 10 4.47715 10 10Z" class="Vector"/>     </g>   </g> </svg>
  );
};

export default Moon;
