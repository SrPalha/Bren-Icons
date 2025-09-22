import React from 'react';
import type { IconProps } from '../types';

const Share03: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11.1 3c-3.65.007-5.56.096-6.782 1.318C3 5.636 3 7.757 3 12c0 4.242 0 6.364 1.318 7.682C5.636 21 7.758 21 12 21c4.243 0 6.364 0 7.683-1.318 1.22-1.221 1.31-3.133 1.317-6.782"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m21 6.025-1-.002c-3.737-.01-5.605-.014-6.918.93-.437.313-.82.695-1.135 1.131C11 9.395 11 11.264 11 15m10-8.975a.685.685 0 0 0-.175-.472C20.06 4.647 18.071 3 18.071 3M21 6.025a.698.698 0 0 1-.174.422C20.06 7.353 18.07 9 18.07 9"/> </svg>
  );
};

export default Share03;
