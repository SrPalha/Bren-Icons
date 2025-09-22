import React from 'react';
import type { IconProps } from '../types';

const Cosine02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M22 3.271c-4-1.936-5.412 7.074-5.669 8.684C15.467 17.362 14.121 21 12 21c-2.12 0-3.467-3.638-4.331-9.045C7.412 10.345 6 1.335 2 3.27"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2 12h3m14 0h3m-12 0h4"/> </svg>
  );
};

export default Cosine02;
