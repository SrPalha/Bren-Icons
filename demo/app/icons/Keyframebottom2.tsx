import React from 'react';
import type { IconProps } from '../types';

const Keyframebottom2: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path fill="#1B1C1B" d="M10.69 5.003C11.296 4.334 11.598 4 12 4s.705.334 1.31 1.003l1.485 1.643C15.598 7.536 16 7.98 16 8.5s-.402.965-1.205 1.854l-1.486 1.644C12.705 12.665 12.403 13 12 13c-.403 0-.705-.334-1.31-1.002l-1.485-1.644C8.402 9.464 8 9.02 8 8.5s.402-.965 1.205-1.854l1.486-1.643Z" opacity=".4"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M10.69 5.003C11.296 4.334 11.598 4 12 4s.705.334 1.31 1.003l1.485 1.643C15.598 7.536 16 7.98 16 8.5s-.402.965-1.205 1.854l-1.486 1.644C12.705 12.665 12.403 13 12 13c-.403 0-.705-.334-1.31-1.002l-1.485-1.644C8.402 9.464 8 9.02 8 8.5s.402-.965 1.205-1.854l1.486-1.643Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 16v4m-9 0h18"/> </svg>
  );
};

export default Keyframebottom2;
