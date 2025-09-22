import React from 'react';
import type { IconProps } from '../types';

const Shoppingbag03: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="m3.062 14.441.365-2.143c.432-2.532.647-3.798 1.502-4.548S7.012 7 9.467 7h5.066c2.455 0 3.683 0 4.538.75.855.75 1.07 2.016 1.502 4.549l.365 2.142c.598 3.505.896 5.257-.023 6.408C19.995 22 18.295 22 14.898 22H9.102c-3.398 0-5.097 0-6.017-1.15-.92-1.152-.62-2.904-.023-6.409Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="m7.5 9 .215-3.01a4.296 4.296 0 0 1 8.57 0L16.5 9"/> </svg>
  );
};

export default Shoppingbag03;
