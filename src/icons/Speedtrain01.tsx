import React from 'react';
import type { IconProps } from '../types';

const Speedtrain01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M2 3h4.733c2.61 0 3.916 0 5.135.401 1.219.401 2.269 1.177 4.37 2.728l3.69 2.726.08.06A5 5 0 0 1 22 12.958v.073A2 2 0 0 1 20.032 15H2"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M2 8h1.893c.27 0 .405 0 .533.008a4 4 0 0 1 2.815 1.43c.082.098.162.206.32.424A2 2 0 0 1 8 11.203v.213c.001.171.001.257-.025.326a.4.4 0 0 1-.232.232c-.07.026-.156.026-.327.026H2"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 11h-3.667C14.388 11 12 8.761 12 6V4"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M2 19h20"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18 19v2m-6-2v2m-6-2v2"/> </svg>
  );
};

export default Speedtrain01;
