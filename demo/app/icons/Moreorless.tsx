import React from 'react';
import type { IconProps } from '../types';

const Moreorless: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M4 12h16m0-5H7.003c-1.821 0-2.732 0-2.958-.617-.227-.618.417-1.344 1.705-2.797L6.269 3M4 17h12.997c1.821 0 2.732 0 2.958.617.227.618-.417 1.344-1.705 2.797l-.519.586"/> </svg>
  );
};

export default Moreorless;
