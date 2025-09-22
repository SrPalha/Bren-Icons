import React from 'react';
import type { IconProps } from '../types';

const Squarelockremove02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M17.943 17.057 17 18m0 0-.943.943M17 18l.943.943M17 18l-.943-.943m3.771 3.771a4 4 0 1 1-5.656-5.656 4 4 0 0 1 5.656 5.656Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M11.5 21.999 11 22c-1.585 0-3.024-.034-4.44-.1-1.684-.076-3.067-1.385-3.292-3.055C3.12 17.755 3 16.638 3 15.5c0-1.138.121-2.255.268-3.345.225-1.67 1.608-2.979 3.292-3.056A95.563 95.563 0 0 1 11 9c1.585 0 3.024.034 4.44.1 1.456.066 2.608 1.054 3.06 2.4"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6.5 9V6.5a4.5 4.5 0 0 1 9 0V9"/> </svg>
  );
};

export default Squarelockremove02;
