import React from 'react';
import type { IconProps } from '../types';

const Commentremove02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m15 2 3.5 3.5m0 0L22 9m-3.5-3.5L22 2m-3.5 3.5L15 9"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M6.099 19.5c-1.3-.128-2.274-.518-2.927-1.172C2 17.157 2 15.271 2 11.5V11c0-3.771 0-5.657 1.172-6.828C4.343 3 6.229 3 10 3h1.5m-5 15c-.205 1.002-1.122 3.166-.184 3.865.49.357 1.271-.024 2.834-.786 1.096-.535 2.206-1.148 3.405-1.424.438-.1.885-.143 1.445-.155 3.771 0 5.657 0 6.828-1.172C21.947 17.21 21.998 15.44 22 12"/> </svg>
  );
};

export default Commentremove02;
