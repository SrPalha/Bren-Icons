import React from 'react';
import type { IconProps } from '../types';

const Lockkey: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M18 10.997c-.392-.8-1.452-1.976-3.63-1.926 0 0-1.727-.075-3.68-.075-1.952 0-2.866.046-4.43.075-1.001-.025-2.904.2-3.78 2.276-.575 1.75-.6 5.427-.25 7.277.075.95.576 2.276 2.128 2.976.95.5 2.478.3 3.63.4M5.984 8.196c-.05-2.375-.15-4.25 2.603-5.801.926-.375 2.303-.7 4.005.1 1.777 1.075 1.999 2.213 2.153 2.5.425 1.126.2 2.726.25 3.376"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M15.5 19.734a2.232 2.232 0 0 1-2.245 2.23c-1.236 0-2.255-.986-2.255-2.23a2.253 2.253 0 0 1 2.255-2.244c1.236 0 2.245 1 2.245 2.244Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="m15.225 17.79 1.99-1.943m0 0 1.412-1.357c.323-.276.973-.922 1.746-.182L22 15.848m-4.784 0 1.61 1.544"/> </svg>
  );
};

export default Lockkey;
