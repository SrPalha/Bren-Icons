import React from 'react';
import type { IconProps } from '../types';

const Inbox1: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none">   <g class="inbox" clip-path="url(#a)">     <g class="inbox">       <path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" d="M21.5 13.5h-4.9257c-.8421 0-1.5037.7036-1.8748 1.4472C14.2963 15.7551 13.4889 16.5 12 16.5c-1.4889 0-2.29627-.7449-2.69946-1.5528C8.92942 14.2036 8.26777 13.5 7.42566 13.5H2.5m0-1.5c0-4.47834 0-6.71751 1.39124-8.10876C5.28249 2.5 7.52166 2.5 12 2.5c4.4783 0 6.7175 0 8.1088 1.39124C21.5 5.28249 21.5 7.52166 21.5 12c0 4.4783 0 6.7175-1.3912 8.1088C18.7175 21.5 16.4783 21.5 12 21.5c-4.47834 0-6.71751 0-8.10876-1.3912C2.5 18.7175 2.5 16.4783 2.5 12Z" class="Vector"/>     </g>   </g>   <defs>     <clipPath id="a" class="a">       <path fill="#fff" d="M0 0h24v24H0z"/>     </clipPath>   </defs> </svg>
  );
};

export default Inbox1;
