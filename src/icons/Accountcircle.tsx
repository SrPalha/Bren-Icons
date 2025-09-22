import React from 'react';
import type { IconProps } from '../types';

const Accountcircle: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none">   <g class="account_circle">     <g class="account_circle">       <path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M7.5 17c2.3317-2.4422 6.6432-2.5572 9 0m5.5-5c0 5.5228-4.4772 10-10 10-5.52285 0-10-4.4772-10-10C2 6.47715 6.47715 2 12 2c5.5228 0 10 4.47715 10 10Zm-7.5049-2.5c0 1.3807-1.1209 2.5-2.5036 2.5-1.3826 0-2.50353-1.1193-2.50353-2.5 0-1.38071 1.12093-2.5 2.50353-2.5 1.3827 0 2.5036 1.11929 2.5036 2.5Z" class="Vector"/>     </g>   </g> </svg>
  );
};

export default Accountcircle;
