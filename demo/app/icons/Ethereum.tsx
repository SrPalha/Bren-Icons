import React from 'react';
import type { IconProps } from '../types';

const Ethereum: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m19 12-5.76 2.579c-.611.28-.917.421-1.24.421-.323 0-.629-.14-1.24-.421L5 12m14 0c0-.532-.305-1-.917-1.936L14.58 4.696C13.406 2.9 12.82 2 12 2c-.82 0-1.406.899-2.58 2.696l-3.503 5.368C5.306 11 5 11.468 5 12m14 0c0 .532-.305 1-.917 1.936l-3.503 5.368C13.406 21.1 12.82 22 12 22c-.82 0-1.406-.899-2.58-2.696l-3.503-5.368C5.306 13 5 12.532 5 12"/> </svg>
  );
};

export default Ethereum;
