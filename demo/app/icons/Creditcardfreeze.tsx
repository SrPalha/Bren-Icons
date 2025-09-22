import React from 'react';
import type { IconProps } from '../types';

const Creditcardfreeze: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M22 9c-.037-2.252-.21-3.553-1.044-4.487a4.38 4.38 0 0 0-.555-.522C19.146 3 17.266 3 13.506 3h-3.002c-3.76 0-5.64 0-6.896.99a4.38 4.38 0 0 0-.555.523C2 5.693 2 7.463 2 11s0 5.306 1.053 6.487c.169.189.354.364.555.522C4.864 19 6.744 19 10.504 19h.996"/>   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="M2 8h20"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18 13v1.778m0 0v4.444m0-4.444L19.5 14m-1.5.778L16.5 14m1.5 5.222V21m0-1.778L16.5 20m1.5-.778 1.5.778m2.5-3h-1.778m0 0h-4.444m4.444 0L21 18.5m-.778-1.5L21 15.5M15.778 17H14m1.778 0L15 15.5m.778 1.5L15 18.5"/> </svg>
  );
};

export default Creditcardfreeze;
