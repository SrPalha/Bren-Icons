import React from 'react';
import type { IconProps } from '../types';

const Cameraoff02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M21 21.121c-.873.879-2.278.879-5.089.879h-7.95c-2.81 0-4.215 0-5.088-.879C2 20.242 2 18.828 2 16v-4.5c0-2.347 0-3.52.616-4.328a2.99 2.99 0 0 1 .55-.553c.675-.522 1.255-.605 2.809-.618"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21.993 17.5C22 17.05 22 16.552 22 16v-4.5c0-2.346 0-3.518-.62-4.326a3 3 0 0 0-.554-.554C20.018 6 19.346 6 17 6h-.4m0 0 .4 1m-.4-1-.486-1.215c-.382-.955-.715-2.039-1.697-2.525C13.892 2 13.262 2 12 2c-1.262 0-1.893 0-2.417.26C8.691 2.7 8.353 3.623 8 4.5"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M11.06 11A3.389 3.389 0 0 0 9 14.112c0 1.87 1.529 3.388 3.414 3.388a3.417 3.417 0 0 0 3.086-1.936"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6h.009"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="m2 2 20 20"/> </svg>
  );
};

export default Cameraoff02;
