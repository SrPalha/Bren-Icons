import React from 'react';
import type { IconProps } from '../types';

const Spatula: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m16.988 2.38.76.55a14.963 14.963 0 0 1 3.32 3.318l.551.759c.577.793.49 1.888-.204 2.581l-4.53 4.527a1.998 1.998 0 0 1-1.813.543l-2.038-.418a1.997 1.997 0 0 0-1.813.543L4.648 21.35c-.392.41-1.273 1.132-2.225.18-.864-.862-.203-1.804.207-2.196l6.574-6.566a1.993 1.993 0 0 0 .543-1.811L9.33 8.92a1.993 1.993 0 0 1 .544-1.81l4.531-4.527a1.998 1.998 0 0 1 2.584-.204Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="m15.22 10.686 2.155-2.155m-4 .311 2.154-2.155"/> </svg>
  );
};

export default Spatula;
