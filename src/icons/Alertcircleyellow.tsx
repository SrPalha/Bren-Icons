import React from 'react';
import type { IconProps } from '../types';

const Alertcircleyellow: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none">   <g class="alert-circle-yellow">     <g class="alert-circle-yellow">       <path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M11.992 15h.009M12 12V8m10 4c0 5.5228-4.4772 10-10 10-5.52285 0-10-4.4772-10-10C2 6.47715 6.47715 2 12 2c5.5228 0 10 4.47715 10 10Z" class="Vector"/>     </g>   </g> </svg>
  );
};

export default Alertcircleyellow;
