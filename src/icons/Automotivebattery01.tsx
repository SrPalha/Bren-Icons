import React from 'react';
import type { IconProps } from '../types';

const Automotivebattery01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M16 5.5H8c-2.828 0-4.243 0-5.121.879C2 7.257 2 8.672 2 11.5V15c0 2.828 0 4.243.879 5.121C3.757 21 5.172 21 8 21h8c2.828 0 4.243 0 5.121-.879C22 19.243 22 17.828 22 15v-3.5c0-2.828 0-4.243-.879-5.121C20.243 5.5 18.828 5.5 16 5.5Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 8.5v4m2-2h-4m-6 0H5m4-5v-.75c0-.702 0-1.053-.169-1.306a1 1 0 0 0-.275-.275C8.303 3 7.952 3 7.25 3c-.702 0-1.053 0-1.306.169a1 1 0 0 0-.275.275C5.5 3.697 5.5 4.048 5.5 4.75v.75m13 0v-.75c0-.702 0-1.053-.169-1.306a1 1 0 0 0-.275-.275C17.803 3 17.452 3 16.75 3c-.702 0-1.053 0-1.306.169a1 1 0 0 0-.276.275C15 3.697 15 4.048 15 4.75v.75"/> </svg>
  );
};

export default Automotivebattery01;
