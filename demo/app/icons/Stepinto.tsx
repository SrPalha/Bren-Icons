import React from 'react';
import type { IconProps } from '../types';

const Stepinto: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m9 14 1.586 1.84c.666.773 1 1.16 1.414 1.16.414 0 .748-.387 1.414-1.16L15 14"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 16.5V12c0-3.771 0-5.657-1.172-6.828C9.657 4 7.771 4 4 4H3m0 16h6m6 0h6"/> </svg>
  );
};

export default Stepinto;
