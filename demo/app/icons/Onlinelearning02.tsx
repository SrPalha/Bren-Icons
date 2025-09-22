import React from 'react';
import type { IconProps } from '../types';

const Onlinelearning02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M20.5 16.929V10c0-3.771 0-5.657-1.172-6.828C18.157 2 16.271 2 12.5 2h-1C7.729 2 5.843 2 4.672 3.172 3.5 4.343 3.5 6.229 3.5 10v9.5"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M20.5 17H6a2.5 2.5 0 0 0 0 5h14.5"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M20.5 17a2.5 2.5 0 0 0 0 5M8 7.374C9.149 6.504 10.52 6 11.995 6c1.478 0 2.854.508 4.005 1.382m-1.826 2.336a4.325 4.325 0 0 0-2.18-.594c-.779 0-1.516.211-2.17.588M12 12h.006"/> </svg>
  );
};

export default Onlinelearning02;
