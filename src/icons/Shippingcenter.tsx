import React from 'react';
import type { IconProps } from '../types';

const Shippingcenter: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M19 15H5a3 3 0 1 0 0 6h14a3 3 0 1 0 0-6ZM6 9c0-2.828 0-4.243.879-5.121C7.757 3 9.172 3 12 3c2.828 0 4.243 0 5.121.879C18 4.757 18 6.172 18 9c0 2.828 0 4.243-.879 5.121C16.243 15 14.828 15 12 15c-2.828 0-4.243 0-5.121-.879C6 13.243 6 11.828 6 9Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.995 18h.01M7 18h.009m9.982 0H17"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10.5 6h3"/> </svg>
  );
};

export default Shippingcenter;
