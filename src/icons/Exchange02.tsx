import React from 'react';
import type { IconProps } from '../types';

const Exchange02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.125 9.5v-6M6 3.5V2m0 9V9.5m-1.875-3h3.75m0 0C8.496 6.5 9 7.004 9 7.625v.75C9 8.996 8.496 9.5 7.875 9.5H3m4.875-3C8.496 6.5 9 5.996 9 5.375v-.75C9 4.004 8.496 3.5 7.875 3.5H3m12 14 3-4.5 3 4.5m-6 0 3 4.5 3-4.5m-6 0 3 1.125 3-1.125M12 5c2.828 0 5.243 0 6.121.799C19 6.598 19 7.429 19 10l-2-1m-5 10c-2.828 0-5.243 0-6.121-.799C5 17.402 5 16.571 5 14l2 1"/> </svg>
  );
};

export default Exchange02;
