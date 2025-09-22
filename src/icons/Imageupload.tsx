import React from 'react';
import type { IconProps } from '../types';

const Imageupload: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M13 3.002C12.53 3 12.03 3 11.5 3 7.022 3 4.782 3 3.391 4.391S2 8.021 2 12.5c0 4.478 0 6.718 1.391 8.109S7.021 22 11.5 22c4.478 0 6.718 0 8.109-1.391 1.338-1.339 1.389-3.462 1.39-7.609"/>   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="M2 14.135c.619-.09 1.245-.134 1.872-.132 2.652-.056 5.239.77 7.3 2.331 1.91 1.448 3.253 3.44 3.828 5.666"/>   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="M21 16.896c-1.175-.595-2.391-.897-3.614-.896-1.851-.007-3.684.673-5.386 2"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 4.5c.491-.506 1.8-2.5 2.5-2.5m0 0c.7 0 2.009 1.994 2.5 2.5M19.5 2v8"/> </svg>
  );
};

export default Imageupload;
