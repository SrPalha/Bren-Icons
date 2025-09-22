import React from 'react';
import type { IconProps } from '../types';

const Hologram: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M3 22h18"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m17 19-1-4m-8 0-1 4m5-3v3"/>   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="M12 7c.495 0 .956-.199 1.877-.595l.665-.287C16.181 5.412 17 5.059 17 4.5c0-.559-.82-.912-2.458-1.618l-.665-.287C12.957 2.198 12.495 2 12 2c-.495 0-.956.199-1.877.595l-.665.287C7.819 3.588 7 3.941 7 4.5c0 .559.82.912 2.458 1.618l.665.287C11.043 6.8 11.505 7 12 7Zm0 0v6"/>   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="M17 4.5v6c0 .559-.82.912-2.458 1.618l-.665.287c-.92.397-1.382.595-1.877.595-.495 0-.956-.198-1.877-.595l-.665-.287C7.819 11.412 7 11.059 7 10.5v-6"/> </svg>
  );
};

export default Hologram;
