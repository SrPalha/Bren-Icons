import React from 'react';
import type { IconProps } from '../types';

const Moveright1: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M5 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M22 12H12m10 0c0 .562-.438.99-1.314 1.844L19.029 15.5M22 12c0-.562-.438-.99-1.314-1.844L19.03 8.5"/> </svg>
  );
};

export default Moveright1;
