import React from 'react';
import type { IconProps } from '../types';

const Fishfood: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6.008 12h-.01"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11 16.042c.463.153.908.329 1.31.61m0 0A3.947 3.947 0 0 1 14 19.884a.117.117 0 0 1-.118.116c-2.917-.013-4.224-.507-4.773-1.322L8 16.857c-2.492-.503-4.782-2.095-6-4.774 3-6.597 12.5-6.597 15.5 0m-5.19 4.57c2.17-.66 4.105-2.184 5.19-4.57m0 0c.333-.66 2.1-2.969 4.5-2.969-.833.825-2.2 3.959-1 5.938-1.2 0-3-2.309-3.5-2.969Zm-5.19-4.569A3.947 3.947 0 0 0 14 4.282c0-.826-4.308.342-4.89 1.206L8 7.31"/> </svg>
  );
};

export default Fishfood;
