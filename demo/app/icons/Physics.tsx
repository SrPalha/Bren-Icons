import React from 'react';
import type { IconProps } from '../types';

const Physics: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M12 5.793a27.92 27.92 0 0 1 3.342 2.865A27.909 27.909 0 0 1 18.207 12M12 5.793a27.916 27.916 0 0 0-3.342 2.865A27.912 27.912 0 0 0 5.793 12M12 5.793c3.57-2.584 6.947-3.554 8.354-2.147 1.407 1.407.437 4.784-2.147 8.354m0 0c2.584 3.57 3.554 6.947 2.147 8.354-1.043 1.043-3.17.78-5.654-.48M18.207 12a27.916 27.916 0 0 1-2.865 3.342A27.917 27.917 0 0 1 12 18.207M5.793 12a27.912 27.912 0 0 0 2.865 3.342A27.916 27.916 0 0 0 12 18.207M5.793 12c-2.584 3.57-3.554 6.947-2.147 8.354 1.407 1.407 4.784.437 8.354-2.147M5.793 12C3.21 8.43 2.24 5.053 3.646 3.646c1.043-1.043 3.17-.78 5.654.48"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/> </svg>
  );
};

export default Physics;
