import React from 'react';
import type { IconProps } from '../types';

const Global: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10 10-4.477 10-10Z"/>   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="M20 5.699c-.935.067-2.132.43-2.962 1.504-1.5 1.94-2.999 2.103-3.999 1.456-1.5-.97-.239-2.543-1.999-3.397C9.893 4.705 9.733 3.19 10.372 2M2 11c.763.662 1.83 1.268 3.089 1.268 2.6 0 3.12.497 3.12 2.484s0 1.987.52 3.477c.338.97.456 1.938-.218 2.771M22 13.452c-.887-.51-2-.721-3.127.088-2.155 1.55-3.642.266-4.311 1.549C13.576 16.977 17.096 17.57 14 22"/> </svg>
  );
};

export default Global;
