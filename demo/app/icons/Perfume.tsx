import React from 'react';
import type { IconProps } from '../types';

const Perfume: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2 16.033a7.41 7.41 0 0 0 2.01 5.082c.695.741 1.315.885 2.319.885h6.342c1.004 0 1.624-.144 2.318-.885A7.409 7.409 0 0 0 17 16.033c0-3.007-1.79-5.598-4.367-6.778-.441-.201-.831-.255-1.315-.255H7.682c-.484 0-.874.054-1.315.255C3.79 10.435 2 13.026 2 16.033Z"/>   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="M7 9V8c0-1.655.345-2 2-2h1c1.655 0 2 .345 2 2v1m-1-3V4.5C11 3.45 10.627 3 9.5 3S8 3.45 8 4.5V6"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM6 4h2m3 0h5"/> </svg>
  );
};

export default Perfume;
