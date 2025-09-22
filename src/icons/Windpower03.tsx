import React from 'react';
import type { IconProps } from '../types';

const Windpower03: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M14 10.866a2 2 0 1 1-4.002.002A2 2 0 0 1 14 10.866Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13.99 10.684 20 14.368a2.999 2.999 0 0 1-4.098 1.098l-4.165-2.617m1.747-3.344V2.368c-1.657 0-2.967 1.344-2.967 3.002v4.135"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10.007 10.687 4 14.367a2.999 2.999 0 0 0 4.098 1.099l4.164-2.617m1.188 4.021.32 2.022c.226 1.605.34 2.407.085 2.944-.255.537-.748.537-1.735.537h-.24c-.987 0-1.48 0-1.735-.537-.254-.537-.141-1.34.085-2.944l.32-2.022"/> </svg>
  );
};

export default Windpower03;
