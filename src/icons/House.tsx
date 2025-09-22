import React from 'react';
import type { IconProps } from '../types';

const House: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none">   <g class="House" clip-path="url(#a)">     <g class="House">       <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 16h.009M9.06165 4.82633 3.23911 9.92134c-.49931.43696-.16453 1.21296.52327 1.21296.42021 0 .76086.3146.76086.7028v3.2435c0 2.7904 0 4.1856.93852 5.0525C6.40029 21 7.91082 21 10.9319 21h2.1362c3.0211 0 4.5316 0 5.4701-.8669.9386-.8669.9386-2.2621.9386-5.0525v-3.2435c0-.3882.3406-.7028.7608-.7028.6878 0 1.0226-.776.5233-1.21296l-5.8226-5.09501C13.5469 3.60878 12.8512 3 12 3s-1.5469.60878-2.93835 1.82633Z" class="Vector"/>     </g>   </g>   <defs>     <clipPath id="a" class="a">       <path fill="#fff" d="M0 0h24v24H0z"/>     </clipPath>   </defs> </svg>
  );
};

export default House;
