import React from 'react';
import type { IconProps } from '../types';

const Searchvisual: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8.983 2c-2.806.064-4.445.331-5.565 1.447C2.438 4.424 2.11 5.797 2 8m13.017-6c2.806.064 4.445.331 5.566 1.447.98.977 1.308 2.35 1.417 4.553m-6.983 14c2.806-.064 4.445-.331 5.566-1.447.98-.977 1.308-2.35 1.417-4.553M8.983 22c-2.806-.064-4.445-.331-5.565-1.447C2.438 19.576 2.11 18.203 2 16m13-1 2 2m-1-5.5a4.5 4.5 0 1 0-9 0 4.5 4.5 0 0 0 9 0Z"/> </svg>
  );
};

export default Searchvisual;
