import React from 'react';
import type { IconProps } from '../types';

const Graduationscroll: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M21.16 9.928c1.033-.386 1.126-2.235.209-4.129-.918-1.893-2.498-3.114-3.53-2.727m3.322 6.856c-1.032.387-2.612-.834-3.53-2.727-.917-1.894-.824-3.743.208-4.13m3.322 6.857-15 9c-1.032.387-2.612-.834-3.53-2.727-.917-1.894-.824-3.743.208-4.13l15-9"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M15 13.607c-1.362-.573-4.077-2.657-4.043-6.406m.543 8.5c-1.167-.557-3.6-2.623-4-6.432"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.43 14c.598 1.13 1.209 4.112-.88 7l-.987-1.416L11 20.81s1.825-1.923.953-4.81"/> </svg>
  );
};

export default Graduationscroll;
