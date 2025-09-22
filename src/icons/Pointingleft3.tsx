import React from 'react';
import type { IconProps } from '../types';

const Pointingleft3: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m12.671 7.871 1.829 2.134H4.75a1.75 1.75 0 1 0 0 3.5H10l.478 2.988c.289 1.929.434 2.893.84 3.572C11.991 21.187 13 22 14.474 22c1.026 0 1.715-.254 3.565-.87 1.174-.392 1.76-.587 2.225-.906a4 4 0 0 0 1.58-2.192c.156-.542.156-1.16.156-2.398v-1.05c0-1.644 0-2.467-.302-3.2a3.989 3.989 0 0 0-.183-.384c-.378-.696-1.016-1.215-2.293-2.252l-4.134-3.359a1.74 1.74 0 0 0-2.417 2.482ZM2 4.5h6m-6 0C2 3.8 3.994 2.492 4.5 2M2 4.5C2 5.2 3.994 6.508 4.5 7"/> </svg>
  );
};

export default Pointingleft3;
