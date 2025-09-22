import React from 'react';
import type { IconProps } from '../types';

const Keyframetop1: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path fill="#1B1C1B" d="M13.31 18.997C12.704 19.666 12.402 20 12 20s-.705-.334-1.31-1.003l-1.485-1.643C8.402 16.464 8 16.02 8 15.5s.402-.965 1.205-1.854l1.486-1.644C11.295 11.335 11.597 11 12 11c.403 0 .705.334 1.31 1.002l1.485 1.644C15.598 14.536 16 14.98 16 15.5s-.402.965-1.205 1.854l-1.486 1.643Z" opacity=".4"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M13.31 18.997C12.704 19.666 12.402 20 12 20s-.705-.334-1.31-1.003l-1.485-1.643C8.402 16.464 8 16.02 8 15.5s.402-.965 1.205-1.854l1.486-1.644C11.295 11.335 11.597 11 12 11c.403 0 .705.334 1.31 1.002l1.485 1.644C15.598 14.536 16 14.98 16 15.5s-.402.965-1.205 1.854l-1.486 1.643Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8V4m9 0H3"/> </svg>
  );
};

export default Keyframetop1;
