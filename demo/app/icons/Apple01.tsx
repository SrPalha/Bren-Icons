import React from 'react';
import type { IconProps } from '../types';

const Apple01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="M8 5c-2.761 0-5 3.014-5 6.028 0 3.516.5 6.028 2.5 9.042 1.52 2.036 3.55 2.547 5.714 1.12a1.468 1.468 0 0 1 1.572 0c2.164 1.427 4.194.916 5.714-1.12 2-3.014 2.5-5.526 2.5-9.042C21 8.014 18.761 5 16 5c-1.425 0-2.711.785-3.622 1.633a.557.557 0 0 1-.756 0C10.712 5.785 9.425 5 8 5Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 12c0-1.633.823-3.267 2-4m4-2c0-1.333.6-4 3-4"/> </svg>
  );
};

export default Apple01;
