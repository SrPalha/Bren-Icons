import React from 'react';
import type { IconProps } from '../types';

const Idea01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M6.09 14.999a6.86 6.86 0 0 1-.59-2.794C5.5 8.5 8.41 5.499 12 5.499s6.5 3.002 6.5 6.706a6.86 6.86 0 0 1-.59 2.794"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 1.999v1m10 9h-1m-18 0H2m17.07-7.071-.707.707m-12.726.001-.707-.707m9.587 14.376c1.01-.326 1.416-1.251 1.53-2.181.034-.278-.195-.509-.475-.509H8.477a.483.483 0 0 0-.488.534c.112.928.394 1.606 1.464 2.156m5.064 0H9.453m5.064 0c-.121 1.945-.683 2.716-2.51 2.694-1.954.036-2.404-.916-2.554-2.694"/> </svg>
  );
};

export default Idea01;
