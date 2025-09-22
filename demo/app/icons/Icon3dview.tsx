import React from 'react';
import type { IconProps } from '../types';

const Icon3dview: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="M12 11.5c.495 0 .956-.198 1.877-.595l.665-.287C16.181 9.912 17 9.559 17 9c0-.559-.82-.912-2.458-1.618l-.665-.287C12.957 6.7 12.495 6.5 12 6.5c-.495 0-.956.199-1.877.595l-.665.287C7.819 8.088 7 8.441 7 9c0 .559.82.912 2.458 1.618l.665.287c.92.397 1.382.595 1.877.595Zm0 0v6"/>   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="M17 9v6c0 .559-.82.912-2.458 1.618l-.665.287c-.92.396-1.382.595-1.877.595-.495 0-.956-.198-1.877-.596l-.665-.286C7.819 15.912 7 15.559 7 15V9"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.144 2.5c-2.657.06-4.209.315-5.27 1.375-1.06 1.06-1.313 2.612-1.374 5.27M14.856 2.5c2.657.06 4.209.315 5.27 1.375 1.06 1.06 1.313 2.612 1.374 5.27M14.856 21.5c2.657-.06 4.209-.315 5.27-1.375 1.06-1.06 1.313-2.612 1.374-5.27M9.144 21.5c-2.657-.06-4.209-.315-5.27-1.375-1.06-1.06-1.313-2.612-1.374-5.27"/> </svg>
  );
};

export default Icon3dview;
