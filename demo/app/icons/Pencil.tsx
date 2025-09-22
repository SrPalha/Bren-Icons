import React from 'react';
import type { IconProps } from '../types';

const Pencil: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 22v-8.306c0-1.565 0-2.348.215-3.086.214-.739.63-1.39 1.465-2.693l2.656-4.15C11.088 2.587 11.465 2 12 2c.535 0 .912.588 1.664 1.764l2.656 4.151c.834 1.303 1.25 1.954 1.465 2.693.215.738.215 1.52.215 3.086V22"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 11c.632.323 1.489.973 2.28 1 1.019.032 1.707-.863 2.72-.863 1.013 0 1.701.895 2.72.862.791-.026 1.649-.676 2.28-.999m-5 1v10M10 5h4"/> </svg>
  );
};

export default Pencil;
