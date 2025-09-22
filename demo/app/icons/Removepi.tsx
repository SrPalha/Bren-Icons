import React from 'react';
import type { IconProps } from '../types';

const Removepi: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8.8C3 7 5.061 5.2 7.685 5.2h9.272C19.2 5.2 21 3.85 21 2.5m-4.5 3L16 11"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 5.5c-.133 3.063-.4 8.75-.8 10.5S8 19.5 6 19.5"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M18.333 17.5h-2.666m5.333 0a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"/> </svg>
  );
};

export default Removepi;
