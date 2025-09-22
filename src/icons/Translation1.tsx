import React from 'react';
import type { IconProps } from '../types';

const Translation1: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 5.966h3.15m0 0h2.1m-2.1 0V5m3.85.966h-1.75m0 0c-.37 1.32-1.142 2.568-2.025 3.665m0 0A22.059 22.059 0 0 1 5.975 12m2.25-2.369c-.45-.528-1.08-1.381-1.26-1.767m1.26 1.767 1.35 1.403"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M7.022 16.978c.055 1.72.242 2.775.886 3.56a4 4 0 0 0 .554.554C9.57 22 11.212 22 14.5 22c3.288 0 4.931 0 6.038-.908.202-.166.388-.352.554-.554C22 19.43 22 17.788 22 14.5c0-3.287 0-4.931-.908-6.038a4 4 0 0 0-.554-.554c-.782-.641-1.831-.83-3.538-.885m-9.978 9.955c-1.72-.055-2.775-.242-3.56-.886a4 4 0 0 1-.554-.554C2 14.43 2 12.788 2 9.5c0-3.287 0-4.931.908-6.038a4 4 0 0 1 .554-.554C4.57 2 6.212 2 9.5 2c3.287 0 4.931 0 6.038.908a4 4 0 0 1 .554.554c.644.785.831 1.84.886 3.56l.022.001m-9.978 9.955L17 7.023"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m13 19 .833-2m0 0 1.667-4 1.667 4m-3.334 0h3.334M18 19l-.833-2"/> </svg>
  );
};

export default Translation1;
