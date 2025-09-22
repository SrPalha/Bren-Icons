import React from 'react';
import type { IconProps } from '../types';

const Treadmill01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="M20.191 21H2.931c-.578 0-.895-.479-.928-.985-.032-.493.204-1.012.73-1.14l15.215-3.77C22.205 14.069 23.364 21 20.191 21Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 18h.009M22 2c-.3.902-.483 2.149-1.167 2.833-.334.334-.8.49-1.73.8L15 7"/>   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="m15 16 5-10.5"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m6 21-1 1m13-1v1"/> </svg>
  );
};

export default Treadmill01;
