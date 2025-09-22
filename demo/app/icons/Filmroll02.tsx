import React from 'react';
import type { IconProps } from '../types';

const Filmroll02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="M10.5 19a8.5 8.5 0 1 0 0-17 8.5 8.5 0 0 0 0 17Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M10.5 10.5h.008M14 7l-1 1m-5 5-1 1m7 0-1-1M8 8 7 7"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m13.5 18.5 5.823-.965C20.719 17.292 22 18.35 22 19.75c0 1.243-1.021 2.25-2.281 2.25H18.7"/> </svg>
  );
};

export default Filmroll02;
