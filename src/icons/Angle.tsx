import React from 'react';
import type { IconProps } from '../types';

const Angle: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 22V2m0 0 10 15M12 2 2 17m14-9c-1.145 1.263-2.52 2-4 2s-2.855-.737-4-2m4 6c-2.22 0-4.283-.737-6-2"/> </svg>
  );
};

export default Angle;
