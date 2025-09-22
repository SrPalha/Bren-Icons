import React from 'react';
import type { IconProps } from '../types';

const Imagedownload: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M5 21c4.21-4.751 8.941-11.053 16-6.327"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M14 3.002C13.53 3 12.03 3 11.5 3 7.022 3 4.782 3 3.391 4.391S2 8.021 2 12.5c0 4.478 0 6.718 1.391 8.109S7.021 22 11.5 22c4.478 0 6.718 0 8.109-1.391 1.338-1.339 1.389-3.462 1.39-7.609"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 7.5c.491.506 1.8 2.5 2.5 2.5m0 0c.7 0 2.009-1.994 2.5-2.5M19.5 10V2"/> </svg>
  );
};

export default Imagedownload;
