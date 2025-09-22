import React from 'react';
import type { IconProps } from '../types';

const Workoutbattleropes: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M8.994 4.498a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20 8.997c-.583 0-1.133-.27-1.483-.73l-1.028-1.348a4.533 4.533 0 0 0-.27-.338 1.877 1.877 0 0 0-2.221-.375m6.004 10.792a4.493 4.493 0 0 1-3.366-1.518l-.678-.767a6.77 6.77 0 0 0-3.713-2.149m-2.376-.137c-.31 0-.465 0-.61-.02-1.24-.18-1.945-1.599-2.765-2.409m5.505-3.022-3.095 1.41-2.06-.129m0 0L5.58 8.064a1 1 0 0 0-.891.404l-.076.104-1.615 4.305v.019a1 1 0 0 0 .377.782l1.813 1.444m2.655-6.865-2.655 6.865m1.17 5.88v-4.637l-.186-.334-.984-.91"/> </svg>
  );
};

export default Workoutbattleropes;
