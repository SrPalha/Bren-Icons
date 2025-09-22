import React from 'react';
import type { IconProps } from '../types';

const Disability02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m11.5 10-2-1L7 12m7-6a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm1.5 13.483A6.07 6.07 0 0 1 10.57 22c-3.353 0-6.07-2.705-6.07-6.042 0-.875.164-1.707.5-2.458M12.65 8l-.754 1.846c-.766 1.879-1.149 2.818-.713 3.486.436.668 1.432.668 3.424.668.694 0 1.364-.18 1.75.496L19.5 20"/> </svg>
  );
};

export default Disability02;
