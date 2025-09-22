import React from 'react';
import type { IconProps } from '../types';

const Userstatus: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M13 21.95c-.329.033-.662.05-1 .05-5.523 0-10-4.477-10-10S6.477 2 12 2s10 4.477 10 10c0 .338-.017.671-.05 1"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M7.5 17c1.402-1.469 3.521-2.096 5.5-1.806M14.495 9.5c0 1.38-1.12 2.5-2.503 2.5a2.502 2.502 0 0 1-2.504-2.5c0-1.38 1.12-2.5 2.504-2.5a2.502 2.502 0 0 1 2.503 2.5Z"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M18.5 22a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"/> </svg>
  );
};

export default Userstatus;
