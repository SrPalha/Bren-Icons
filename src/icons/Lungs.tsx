import React from 'react';
import type { IconProps } from '../types';

const Lungs: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7.978 11c.41.206.737.562.996.995m0 0c.996 1.67.996 4.505.996 4.505 0 3.5-1.784 4.5-3.985 4.5C4.99 21 2 20.5 2 16 2 9.5 5.487 5 8.476 5c2.39 0 1.496 5 .498 6.995ZM16.022 11c-.412.206-.738.562-.997.995m0 0c-.996 1.67-.996 4.505-.996 4.505 0 3.5 1.784 4.5 3.985 4.5.997 0 3.986-.5 3.986-5 0-6.5-3.487-11-6.477-11-2.391 0-1.493 5-.498 6.995Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="m14 7-2-1.333m0 0L10 7m2-1.333V3"/> </svg>
  );
};

export default Lungs;
