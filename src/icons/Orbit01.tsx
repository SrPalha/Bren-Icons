import React from 'react';
import type { IconProps } from '../types';

const Orbit01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M17 12a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M18.646 4.528a2 2 0 1 0 2.708 2.944 2 2 0 0 0-2.708-2.944Zm0 0A9.962 9.962 0 0 0 12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10c0-.338-.017-.671-.05-1"/> </svg>
  );
};

export default Orbit01;
