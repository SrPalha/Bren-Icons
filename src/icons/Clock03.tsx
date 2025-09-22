import React from 'react';
import type { IconProps } from '../types';

const Clock03: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m18.952 8.607 2.51-.153C19.662 3.704 14.497 1 9.46 2.344 4.096 3.778.91 9.262 2.343 14.595c1.434 5.332 6.945 8.494 12.31 7.061A10.036 10.036 0 0 0 22 13.485"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l2 2"/> </svg>
  );
};

export default Clock03;
