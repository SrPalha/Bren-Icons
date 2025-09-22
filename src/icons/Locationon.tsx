import React from 'react';
import type { IconProps } from '../types';

const Locationon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none">   <g class="location_on" clip-path="url(#a)">     <g class="location_on">       <g class="Vector">         <path stroke="currentColor" strokeWidth="1.5" d="M13.6177 21.367c-.4336.406-1.0133.633-1.6166.633s-1.1829-.227-1.6166-.633c-3.97148-3.741-9.29374-7.9201-6.69823-13.98734C5.08963 4.09916 8.45834 2 12.0011 2c3.5428 0 6.9115 2.09916 8.3149 5.37966 2.5922 6.05964-2.717 10.25924-6.6983 13.98734Z"/>         <path stroke="currentColor" strokeWidth="1.5" d="M15.5 11c0 1.933-1.567 3.5-3.5 3.5S8.5 12.933 8.5 11s1.567-3.5 3.5-3.5 3.5 1.567 3.5 3.5Z"/>       </g>     </g>   </g>   <defs>     <clipPath id="a" class="a">       <path fill="#fff" d="M0 0h24v24H0z"/>     </clipPath>   </defs> </svg>
  );
};

export default Locationon;
