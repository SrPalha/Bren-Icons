import React from 'react';
import type { IconProps } from '../types';

const Presentation2: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M3 17h18V8c0-2.828 0-4.243-.879-5.121C19.243 2 17.828 2 15 2H9c-2.828 0-4.243 0-5.121.879C3 3.757 3 5.172 3 8v9Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2 17h20M7 22l5-3 5 3"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M12 17.197V22"/> </svg>
  );
};

export default Presentation2;
