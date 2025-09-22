import React from 'react';
import type { IconProps } from '../types';

const Pointingleft1: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2.017 4.5H8.01m-5.992 0c0-.7 1.992-2.008 2.497-2.499M2.017 4.5c0 .7 1.992 2.007 2.497 2.498M22 10.826h-.949a2.995 2.995 0 0 1-1.792-.595l-4.902-3.66c-.566-.422-1.268-.76-1.915-.48-1.049.45-1.73 1.723-.158 3.281l1.71 1.598H3.57c-2.044.057-2.145 3.347 0 3.488h5.94c-.192 1.48.852 8.457 5.272 7.44l.633-.143c.92-.206 2.557-.814 3.514-1.485.997-.698 1.99-.452 3.07-.452"/> </svg>
  );
};

export default Pointingleft1;
