import React from 'react';
import type { IconProps } from '../types';

const Softdrink01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M12 7V4.348c0-2.187.374-2.716 2.497-2.12L18 3.21M6 7l1.14 11.16c.171 1.677.257 2.515.828 3.021 1.178 1.044 6.78 1.139 8.064 0 .571-.506.657-1.344.828-3.02L18 7M5 7h14M7 12h10M7 16h10"/> </svg>
  );
};

export default Softdrink01;
