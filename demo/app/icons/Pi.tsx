import React from 'react';
import type { IconProps } from '../types';

const Pi: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 9.3c0-1.8 2.061-3.6 4.685-3.6h9.272C19.2 5.7 21 4.35 21 3"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m16.502 6-.895 12.314c-.09 1.451.903 2.686 2.158 2.686.932 0 1.759-.69 2.053-1.715l.284-.985M10 6c-.133 3.063-.4 8.75-.8 10.5S8 20 6 20"/> </svg>
  );
};

export default Pi;
