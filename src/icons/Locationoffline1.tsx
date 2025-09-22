import React from 'react';
import type { IconProps } from '../types';

const Locationoffline1: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M17.5 17.646c-1.232 1.317-2.624 2.542-3.882 3.721A2.366 2.366 0 0 1 12 22a2.366 2.366 0 0 1-1.617-.633C6.412 17.626 1.09 13.447 3.685 7.38 4.021 6.598 4.466 5.635 5 5m2-1.514A9.234 9.234 0 0 1 12.001 2c3.543 0 6.912 2.1 8.315 5.38 1.344 3.142.564 5.784-1.055 8.12"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M9 9c-.335.537-.5 1.32-.5 2a3.5 3.5 0 0 0 3.5 3.5c.66 0 1.473-.183 2-.5m-2.5-6.465a3.5 3.5 0 0 1 3.965 3.965"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m2 2 20 20"/> </svg>
  );
};

export default Locationoffline1;
