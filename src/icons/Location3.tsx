import React from 'react';
import type { IconProps } from '../types';

const Location3: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M14.5 9a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18.222 17c1.395 1.988 2.062 3.047 1.665 3.9-.04.085-.087.168-.14.247-.575.853-2.06.853-5.03.853H9.283c-2.97 0-4.454 0-5.029-.853a1.813 1.813 0 0 1-.14-.247c-.397-.852.27-1.912 1.665-3.9"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M13.257 17.494a1.813 1.813 0 0 1-2.514 0c-3.089-2.993-7.228-6.336-5.21-11.19C6.626 3.679 9.246 2 12 2c2.755 0 5.375 1.68 6.467 4.304 2.016 4.847-2.113 8.207-5.21 11.19Z"/> </svg>
  );
};

export default Location3;
