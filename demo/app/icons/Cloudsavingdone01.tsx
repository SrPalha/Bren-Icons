import React from 'react';
import type { IconProps } from '../types';

const Cloudsavingdone01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.5 18a4.5 4.5 0 1 0-.022-9m0 0A5.5 5.5 0 1 0 6.52 8.023M17.477 9a5.467 5.467 0 0 1-.578 2M6.52 8.023A5 5 0 0 0 6 17.9m.52-9.877A4.978 4.978 0 0 1 10 9M9 19s1 0 2 2c0 0 3.177-5 6-6"/> </svg>
  );
};

export default Cloudsavingdone01;
