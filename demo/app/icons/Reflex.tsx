import React from 'react';
import type { IconProps } from '../types';

const Reflex: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M22 10.5H11.829c-1.136 0-1.704 0-2.17.271-.467.272-.747.765-1.308 1.753l-4.642 8.928M22.001 10.5c0-.56-2.001-2-2.001-2m2 2c0 .56-2 2-2 2M3.708 21.452C3.238 21.18 3 18.794 3 18.794m.708 2.658c.47.273 2.645-.713 2.645-.713"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M15.937 10.5A7.11 7.11 0 0 0 16 9.549C16 5.656 12.866 2.5 9 2.5S2 5.656 2 9.549C2 12.36 3.635 14.869 6 16"/> </svg>
  );
};

export default Reflex;
