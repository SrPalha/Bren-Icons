import React from 'react';
import type { IconProps } from '../types';

const Logout4: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7.023 5.5a9 9 0 1 0 9.953 0M12 2v8"/> </svg>
  );
};

export default Logout4;
