import React from 'react';
import type { IconProps } from '../types';

const Computercheck: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M21.999 11c-.008 2.626-.086 4.043-.813 5.081a4.5 4.5 0 0 1-1.105 1.105C18.92 18 17.28 18 14 18h-4c-3.28 0-4.919 0-6.081-.814a4.5 4.5 0 0 1-1.105-1.105C2 14.92 2 13.28 2 10c0-3.28 0-4.919.814-6.081a4.5 4.5 0 0 1 1.105-1.105C5.08 2 6.72 2 10 2h1.5"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14 6s1 0 2 2c0 0 3.177-5 6-6M11 15h2"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M12 18v4"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M8 22h8"/> </svg>
  );
};

export default Computercheck;
