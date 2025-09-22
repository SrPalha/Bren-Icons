import React from 'react';
import type { IconProps } from '../types';

const Lantern: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18 7.5H6v11h12v-11Zm-12 0C6.717 5.41 8.729 4 10.995 4h2.01C15.271 4 17.283 5.41 18 7.5H6Zm12 11c-.717 2.09-2.729 3.5-4.995 3.5h-2.01C8.729 22 6.717 20.59 6 18.5h12ZM6 7.5H5l1 1m12-1h1l-1 1m0 10h1l-1-1m-12 1H5l1-1M21 11l1-.5M21 15l1 .5M3 11l-1-.5M3 15l-1 .5M12 12v2m0-12v2"/> </svg>
  );
};

export default Lantern;
