import React from 'react';
import type { IconProps } from '../types';

const Coinspound: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M14 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm-1 2.843A7.111 7.111 0 0 1 3.157 11"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7.873c-.125-.828-.891-1.607-1.926-1.307-1.083.314-1.575 1.907-1.083 2.902.509 1.032.753 2.032.088 3.447-.129.275-.194.413-.158.5.036.085.15.085.378.085H16m-4-3.333h3.5"/> </svg>
  );
};

export default Coinspound;
