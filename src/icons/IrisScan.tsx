import React from 'react';
import type { IconProps } from '../types';

const Irisscan: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2.5 8.187c.104-2.1.415-3.41 1.347-4.34.93-.932 2.24-1.243 4.34-1.347M21.5 8.187c-.104-2.1-.415-3.41-1.347-4.34-.93-.932-2.24-1.243-4.34-1.347m0 19c2.1-.104 3.41-.415 4.34-1.347.932-.93 1.243-2.24 1.347-4.34M8.187 21.5c-2.1-.104-3.41-.415-4.34-1.347-.932-.93-1.243-2.24-1.347-4.34"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M2.5 12h19"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 12a6 6 0 0 1 6-6 3 3 0 0 0 4.8 2.4A5.974 5.974 0 0 1 18 12m-.803 3A5.998 5.998 0 0 1 12 18a5.998 5.998 0 0 1-5.197-3"/> </svg>
  );
};

export default Irisscan;
