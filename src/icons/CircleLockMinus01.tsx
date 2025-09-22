import React from 'react';
import type { IconProps } from '../types';

const Circlelockminus01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M11 22c-3.936.098-7-3.192-7-7 0-3.866 3.119-7 6.966-7A6.957 6.957 0 0 1 17 11.5"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M15.5 9.5v-3a4.5 4.5 0 1 0-9 0v3M12 17h8"/> </svg>
  );
};

export default Circlelockminus01;
