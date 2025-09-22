import React from 'react';
import type { IconProps } from '../types';

const Teacher: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2 2h14c1.886 0 2.828 0 3.414.586C20 3.172 20 4.114 20 6v6c0 1.886 0 2.828-.586 3.414C18.828 16 17.886 16 16 16H9m1-9.5h6M2 17v-4c0-.943 0-1.414.293-1.707C2.586 11 3.057 11 4 11h2m-4 6h4m-4 0v5m4-11v6m0-6h6m-6 6v5"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M6 6.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"/> </svg>
  );
};

export default Teacher;
