import React from 'react';
import type { IconProps } from '../types';

const Mosque01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8.653 9C5.183 5.5 10.513 3.75 12 2c1.488 1.75 6.818 3.5 3.347 7H8.653ZM18 12v-1c0-.943 0-1.414-.293-1.707C17.414 9 16.943 9 16 9H8c-.943 0-1.414 0-1.707.293C6 9.586 6 10.057 6 11v1m11 0H7c-1.414 0-2.121 0-2.56.44C4 12.878 4 13.585 4 15v4c0 1.414 0 2.121.44 2.56C4.878 22 5.585 22 7 22h10c1.414 0 2.121 0 2.56-.44.44-.439.44-1.146.44-2.56v-4c0-1.414 0-2.121-.44-2.56C19.122 12 18.415 12 17 12Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.5 22v-3c-.017-3 2.5-4 2.5-4s2.517 1 2.5 4v3"/> </svg>
  );
};

export default Mosque01;
