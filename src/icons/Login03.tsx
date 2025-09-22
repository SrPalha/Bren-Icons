import React from 'react';
import type { IconProps } from '../types';

const Login03: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M15 17.625c-.074 1.852-1.617 3.424-3.684 3.374-.481-.012-1.076-.18-2.265-.515-2.861-.807-5.345-2.164-5.941-5.202C3 14.723 3 14.094 3 12.837v-1.674c0-1.257 0-1.886.11-2.445.596-3.038 3.08-4.395 5.941-5.202 1.19-.335 1.784-.503 2.265-.515 2.067-.05 3.61 1.522 3.684 3.374"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 12h11m-11 0c0-.7 1.994-2.008 2.5-2.5M10 12c0 .7 1.994 2.008 2.5 2.5"/> </svg>
  );
};

export default Login03;
