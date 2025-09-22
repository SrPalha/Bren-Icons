import React from 'react';
import type { IconProps } from '../types';

const Tap5: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13.984 6.011c0-2.215-1.78-4.01-3.974-4.01s-3.973 1.795-3.973 4.01"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m9.376 21.992-.105-1.095c-.487-2.018-1.153-2.284-2.238-3.73-.49-.652-1.513-1.577-2.35-2.827-.557-.832.187-2.725 1.882-2.148.283.096.52.289.73.5l1.647 1.654c-.014-2.338.016-7.097-.02-8.557-.036-1.46 2.498-1.93 2.647.066v4.492m0 0v.866m0-.866c.829-1.098 2.397-1.137 2.625.701m0 0c.037.3.04.65 0 1.053m0-1.053c.419-1.284 2.258-.774 2.624.72m0 0c.087.355 0 .765.035 1.238m-.035-1.237c.238-.72 2.866-.774 2.616 2.009l.066 2.524c-.101 1.507-.322 2.138-.864 2.867-.28.377-.648.71-.789 1.159-.118.376-.192.927-.11 1.672"/> </svg>
  );
};

export default Tap5;
