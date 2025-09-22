import React from 'react';
import type { IconProps } from '../types';

const Handbag02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.993 10.5c.847 2.478 3.125 6.958 1.349 9.38-2.288 3.122-16.837 2.515-18.68 0C.886 17.458 3.153 12.978 4 10.5"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M12 15c1.264 0 2.998 2.571 1.28 2.893a7.698 7.698 0 0 1-2.56 0C9.002 17.57 10.736 15 12 15Zm-4.5 0c-1.778-1.195-2.889-2.908-3.327-4.93-.187-.858-.28-1.287.022-1.679C4.497 8 4.988 8 5.968 8h12.064c.98 0 1.47 0 1.773.391.302.392.209.82.022 1.679-.438 2.022-1.549 3.735-3.327 4.93M12 15V8"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M6.5 8c.57-4.008 2.816-7 5.5-7s4.93 2.992 5.5 7"/> </svg>
  );
};

export default Handbag02;
