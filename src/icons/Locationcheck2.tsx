import React from 'react';
import type { IconProps } from '../types';

const Locationcheck2: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M12 2c4.87 0 9 4.033 9 8.926 0 4.97-4.197 8.459-8.073 10.83a1.886 1.886 0 0 1-1.854 0C7.203 19.363 3 15.915 3 10.927 3 6.033 7.13 2 12 2Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8.5 11.833s.916 0 1.791 1.667c0 0 2.738-4.167 5.209-5"/> </svg>
  );
};

export default Locationcheck2;
