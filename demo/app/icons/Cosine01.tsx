import React from 'react';
import type { IconProps } from '../types';

const Cosine01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M22 20.729c-4 1.936-5.412-7.074-5.669-8.684C15.467 6.638 14.121 3 12 3c-2.12 0-3.467 3.638-4.331 9.045C7.412 13.655 6 22.665 2 20.73"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2 12h2.5m15 0H22m-11.5 0h3"/> </svg>
  );
};

export default Cosine01;
