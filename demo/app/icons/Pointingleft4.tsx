import React from 'react';
import type { IconProps } from '../types';

const Pointingleft4: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14.5 9.916H11m0 0H4.75a1.75 1.75 0 1 0 0 3.5H10l.478 3.077c.289 1.929.434 2.893.84 3.572C11.991 21.187 13 22 14.474 22c1.026 0 1.715-.254 3.565-.87 1.174-.392 1.76-.587 2.225-.906a4 4 0 0 0 1.58-2.192c.156-.542.156-1.16.156-2.398v-1.405c0-1.785 0-2.677-.335-3.443a4.003 4.003 0 0 0-.593-.96c-.535-.642-1.333-1.04-2.93-1.839-1.294-.647-1.94-.97-2.612-.986a3 3 0 0 0-.895.115c-.646.184-1.19.66-2.28 1.614L11 9.916ZM2 4.5h6m-6 0C2 3.8 3.994 2.492 4.5 2M2 4.5C2 5.2 3.994 6.508 4.5 7"/> </svg>
  );
};

export default Pointingleft4;
