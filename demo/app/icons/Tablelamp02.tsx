import React from 'react';
import type { IconProps } from '../types';

const Tablelamp02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 20v2m14-2v2m-1.444-12H6.444c-2.095 0-3.142 0-3.793.586C2 11.172 2 12.114 2 14v2c0 1.886 0 2.828.65 3.414.652.586 1.7.586 3.794.586h11.112c2.095 0 3.142 0 3.793-.586C22 18.828 22 17.886 22 16v-2c0-1.886 0-2.828-.65-3.414C20.697 10 19.65 10 17.555 10ZM12 10v10m4-5h1M7 15h1"/>   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="M8 2C6.104 2 4.511 3.28 4.064 5.01c-.208.805.094.99.89.99h6.092c.796 0 1.098-.185.89-.99C11.49 3.28 9.896 2 8 2Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 6v4m3-4v1.5"/> </svg>
  );
};

export default Tablelamp02;
