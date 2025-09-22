import React from 'react';
import type { IconProps } from '../types';

const Hydropower: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M2 10c.78-3.816 3.67-6.87 7.406-7.91.314-.087.47-.131.555-.038.085.094.022.248-.102.558L9 4.5M14 2c3.816.78 6.87 3.67 7.91 7.406.087.314.131.47.038.555-.094.085-.248.022-.558-.102L19.5 9m2.5 5c-.78 3.816-3.67 6.87-7.406 7.91-.314.087-.47.131-.555.038-.085-.094-.022-.248.102-.558L15 19.5M10 22c-3.816-.78-6.87-3.67-7.91-7.406-.087-.314-.131-.47-.038-.555.094-.085.248-.022.558.102L4.5 15"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M8 12.755c0-1.883 1.685-3.743 2.868-4.818a1.684 1.684 0 0 1 2.264 0C14.315 9.012 16 10.873 16 12.755c0 1.846-1.515 3.745-4 3.745-2.485 0-4-1.899-4-3.745Z"/> </svg>
  );
};

export default Hydropower;
