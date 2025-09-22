import React from 'react';
import type { IconProps } from '../types';

const Useraccount: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M14 9h4m-4 3.5h3"/>   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="M17 3H7a5 5 0 0 0-5 5v8a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5V8a5 5 0 0 0-5-5Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 16c1.208-2.581 5.712-2.75 7 0"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M10.5 9a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"/> </svg>
  );
};

export default Useraccount;
