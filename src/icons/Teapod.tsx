import React from 'react';
import type { IconProps } from '../types';

const Teapod: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M19.007 10.005V6.504c0-2.486-2.023-4.502-4.519-4.502-2.495 0-4.518 2.016-4.518 4.502v3.501m4.518-1.001v-1.5"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m2.17 11.129 4.483 5.774a.3.3 0 0 1 .062.172l.09 2.385A1.869 1.869 0 0 0 8.22 21.2l.247.063a24.4 24.4 0 0 0 12.124-.06 1.796 1.796 0 0 0 1.343-1.697l.06-2.792c.086-3.932-1.187-4.78-1.81-5.35-1.442-1.322-3.587-1.64-5.647-1.64-3.572 0-5.292 1.015-6.09 1.706a.543.543 0 0 1-.629.07L3.844 9.158a.805.805 0 0 0-1.038.192l-.63.792a.798.798 0 0 0-.006.987Z"/> </svg>
  );
};

export default Teapod;
