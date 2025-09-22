import React from 'react';
import type { IconProps } from '../types';

const Rhombus: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="M6.914 5.996C9.312 3.332 10.51 2 12 2c1.49 0 2.688 1.332 5.086 3.996l.318.353C19.8 9.013 21 10.345 21 12c0 1.655-1.199 2.987-3.596 5.651l-.318.353C14.688 20.668 13.49 22 12 22c-1.49 0-2.688-1.332-5.086-3.996l-.318-.353C4.2 14.987 3 13.655 3 12c0-1.655 1.199-2.987 3.596-5.651l.318-.353Z"/> </svg>
  );
};

export default Rhombus;
