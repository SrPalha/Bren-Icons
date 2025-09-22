import React from 'react';
import type { IconProps } from '../types';

const Solarenergy1: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M2 10c.78-3.816 3.67-6.87 7.406-7.91.314-.087.47-.131.555-.038.085.094.022.248-.102.558L9 4.5M14 2c3.816.78 6.87 3.67 7.91 7.406.087.314.131.47.038.555-.094.085-.248.022-.558-.102L19.5 9m2.5 5c-.78 3.816-3.67 6.87-7.406 7.91-.314.087-.47.131-.555.038-.085-.094-.022-.248.102-.558L15 19.5M10 22c-3.816-.78-6.87-3.67-7.91-7.406-.087-.314-.131-.47-.038-.555.094-.085.248-.022.558.102L4.5 15"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 0 1-3 3m3-3a3 3 0 0 0-3-3m3 3h1.5M12 15a3 3 0 0 1-3-3m3 3v1.5M12 9a3 3 0 0 0-3 3m3-3V7.5M9 12H7.5m6.621-2.121 1.061-1.061m-5.303 5.303-1.061 1.061m5.303-1.06 1.061 1.06M9.879 9.879 8.818 8.818"/> </svg>
  );
};

export default Solarenergy1;
