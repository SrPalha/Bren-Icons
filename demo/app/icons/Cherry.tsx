import React from 'react';
import type { IconProps } from '../types';

const Cherry: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M22 16.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M10.5 11c-.878-.63-1.948-1-3.104-1C4.416 10 2 12.462 2 15.5S4.416 21 7.396 21c.693 0 1.355-.133 1.963-.375"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 13c-1.837-1.896-4.271-5.863-2.206-9m0 0c.476-.722 1.19-1.401 2.206-2m-2.206 2c-2.394.5-7.703 2.5-6.66 8"/> </svg>
  );
};

export default Cherry;
