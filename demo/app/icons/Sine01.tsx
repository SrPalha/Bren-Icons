import React from 'react';
import type { IconProps } from '../types';

const Sine01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M5.001 14c0-2.222-.185-10 3.5-10 1.933 0 3.5 3.582 3.5 8s1.566 8 3.499 8c3.686 0 3.5-7.778 3.5-10"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2 12h3m14 0h3M8 12h8"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M20.915 2.833C20.709 2.348 20.153 2 19.5 2c-.828 0-1.5.56-1.5 1.25s.672 1.25 1.5 1.25 1.5.56 1.5 1.25S20.328 7 19.5 7c-.653 0-1.209-.348-1.415-.833M5.544 17C4.69 17 4 17.672 4 18.5v2c0 .828.691 1.5 1.544 1.5m0-5c.672 0 1.244.417 1.456 1m-1.456-1c-.672 0-1.244.417-1.456 1m1.456 4a1.542 1.542 0 0 1-1.456-1m1.456 1c.672 0 1.244-.417 1.456-1"/> </svg>
  );
};

export default Sine01;
