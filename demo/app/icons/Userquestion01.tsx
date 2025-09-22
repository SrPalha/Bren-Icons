import React from 'react';
import type { IconProps } from '../types';

const Userquestion01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 15.846c0-1.02.895-1.846 2-1.846s2 .827 2 1.846c0 .368-.116.71-.317.998C20.085 17.7 19 18.519 19 19.538V20m-.01 2H19m-3 0H6.59c-1.545 0-2.774-.752-3.877-1.803-2.26-2.153 1.45-3.873 2.865-4.715 2.55-1.52 5.628-1.87 8.422-1.054"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M16.5 6.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z"/> </svg>
  );
};

export default Userquestion01;
