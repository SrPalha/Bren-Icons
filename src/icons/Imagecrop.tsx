import React from 'react';
import type { IconProps } from '../types';

const Imagecrop: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M22 20H10c-2.828 0-4.243 0-5.121-.879C4 18.243 4 16.828 4 14V2"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M6 20c3.684-3.564 7.823-8.29 14-4.745"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M2 4h12c2.828 0 4.243 0 5.121.879C20 5.757 20 7.172 20 10v12"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8.5 10a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"/> </svg>
  );
};

export default Imagecrop;
