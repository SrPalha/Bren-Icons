import React from 'react';
import type { IconProps } from '../types';

const Bus03: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6.004 10V5m5 5V5m5 5V5.5M5.016 17c-1.42 0-2.13 0-2.571-.44-.441-.439-.441-1.146-.441-2.56V8c0-1.414 0-2.121.441-2.56C2.886 5 3.596 5 5.016 5h7.085c3.473 0 5.21 0 6.54.706.978.52 1.794 1.3 2.356 2.252.764 1.293.836 3.021.98 6.478.04.932.06 1.398-.123 1.75-.134.26-.34.474-.595.618-.346.196-.814.196-1.75.196h-.505m-10 0h6"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M7.004 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm10 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M1.996 10.002h13.368c.627 0 .84.367 1.32.943.552.54.925.919 1.44.996.72.108 3.384.054 3.384.054"/> </svg>
  );
};

export default Bus03;
