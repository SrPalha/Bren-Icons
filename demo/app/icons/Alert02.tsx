import React from 'react';
import type { IconProps } from '../types';

const Alert02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M5.322 9.683c2.413-4.271 3.62-6.406 5.276-6.956a4.445 4.445 0 0 1 2.804 0c1.656.55 2.863 2.685 5.276 6.956 2.414 4.27 3.62 6.406 3.259 8.146-.2.958-.69 1.826-1.402 2.48C19.241 21.5 16.827 21.5 12 21.5s-7.241 0-8.535-1.19a4.658 4.658 0 0 1-1.402-2.48c-.362-1.74.845-3.876 3.259-8.147Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.992 16H12"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 13V9"/> </svg>
  );
};

export default Alert02;
