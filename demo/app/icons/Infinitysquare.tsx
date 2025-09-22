import React from 'react';
import type { IconProps } from '../types';

const Infinitysquare: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M12 12s-1.643 2.5-3.3 2.5C7.043 14.5 6 13.38 6 12s1.043-2.5 2.7-2.5C10.357 9.5 12 12 12 12Zm0 0s1.643 2.5 3.3 2.5c1.657 0 2.7-1.12 2.7-2.5s-1.043-2.5-2.7-2.5C13.643 9.5 12 12 12 12Z"/>   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109C18.717 21.5 16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391C2.5 18.717 2.5 16.479 2.5 12Z"/> </svg>
  );
};

export default Infinitysquare;
