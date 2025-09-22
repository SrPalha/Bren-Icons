import React from 'react';
import type { IconProps } from '../types';

const Radar1: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M16.596 16.596A6.5 6.5 0 1 1 13 5.576"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="m12 12 4.95-4.95c1.033-1.033 1.55-1.55 1.437-2.298-.113-.749-.649-1.032-1.72-1.599A9.956 9.956 0 0 0 12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10a9.966 9.966 0 0 0-.832-4"/> </svg>
  );
};

export default Radar1;
