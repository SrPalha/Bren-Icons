import React from 'react';
import type { IconProps } from '../types';

const Mobilefriendly: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none">   <g class="mobile_friendly">     <path fill="#1B1C1B" d="M6 23c-.55 0-1.02083-.1958-1.4125-.5875C4.19583 22.0208 4 21.55 4 21V3c0-.55.19583-1.02083.5875-1.4125C4.97917 1.19583 5.45 1 6 1h10c.55 0 1.0208.19583 1.4125.5875C17.8042 1.97917 18 2.45 18 3v4h-2V6H6v12h10v-1h2v4c0 .55-.1958 1.0208-.5875 1.4125C17.0208 22.8042 16.55 23 16 23H6Zm0-3v1h10v-1H6Zm8.95-4-4.25-4.25 1.4-1.4 2.85 2.85 5.65-5.65 1.4 1.4L14.95 16ZM6 4h10V3H6v1Z" class="mobile_friendly"/>   </g> </svg>
  );
};

export default Mobilefriendly;
